import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends Omit<upstream1.BoxParentData, _flaxOwnMembers0>, Omit<upstream2.ParentData, _flaxOwnMembers0 | keyof upstream1.BoxParentData>, Omit<upstream3.ContainerParentDataMixin<ChildType>, _flaxOwnMembers0 | keyof upstream1.BoxParentData | keyof upstream2.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [ChildType];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [ChildType];
}> {
    readonly __ContainerBoxParentData: unique symbol;
    readonly [_flaxDartTypeValue]: ContainerBoxParentData<ChildType>;
}
export interface ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> {
    readonly [_flaxDartTypeValue]: ContainerBoxParentData<ChildType>;
    toString(): string;
    detach(): void;
    get offset(): upstream5.Offset;
    get previousSibling(): ChildType | null;
    get nextSibling(): ChildType | null;
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
    set previousSibling(value: (ChildType | DartInput<ChildType>) | null);
    set nextSibling(value: (ChildType | DartInput<ChildType>) | null);
}
export declare abstract class ContainerBoxParentData<ChildType extends upstream0.RenderObject = upstream0.RenderObject> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContainerBoxParentData<upstream0.RenderObject>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContainerBoxParentData<upstream0.RenderObject>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ContainerBoxParentData", readonly [readonly ["class", "flax.core/sdk_rendering#type:RenderObject", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
}
export declare namespace ContainerBoxParentData {
    function implement<ChildType extends upstream0.RenderObject = upstream0.RenderObject>(args: [], implementation: {}): ContainerBoxParentData<ChildType>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "toString" | "detach" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.RenderObject] ? (abstract new () => ContainerBoxParentData<_Selected0>) & {
        readonly prototype: ContainerBoxParentData<_Selected0>;
        implement(args: readonly [], implementation: Partial<ContainerBoxParentData<_Selected0>>): ContainerBoxParentData<_Selected0>;
    } & _FlaxInstanceType<ContainerBoxParentData<_Selected0>> & _FlaxDartType<ContainerBoxParentData<_Selected0>> : never : never;
}
export {};
