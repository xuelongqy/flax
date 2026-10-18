import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContainerParentDataMixin<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends Omit<upstream1.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [ChildType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __ContainerParentDataMixin: unique symbol;
    readonly [_flaxDartTypeValue]: ContainerParentDataMixin<ChildType>;
    get previousSibling(): ChildType | null;
    get nextSibling(): ChildType | null;
    detach(): void;
    toString(): string;
    set previousSibling(value: (ChildType | DartInput<ChildType>) | null);
    set nextSibling(value: (ChildType | DartInput<ChildType>) | null);
}
export declare const ContainerParentDataMixin: object & _FlaxInstanceType<ContainerParentDataMixin<upstream0.RenderObject>> & _FlaxDartType<ContainerParentDataMixin<upstream0.RenderObject>, readonly ["class", "flax.core/sdk_rendering#type:ContainerParentDataMixin", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "previousSibling" | "nextSibling" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? {
        readonly prototype: ContainerParentDataMixin<_Selected0>;
    } & _FlaxInstanceType<ContainerParentDataMixin<_Selected0>> & _FlaxDartType<ContainerParentDataMixin<_Selected0>> : never : never;
}
export {};
