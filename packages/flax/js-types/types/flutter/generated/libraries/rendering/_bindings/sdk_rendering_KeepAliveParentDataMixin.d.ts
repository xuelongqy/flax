import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface KeepAliveParentDataMixin extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}> {
    readonly __KeepAliveParentDataMixin: unique symbol;
    readonly [_flaxDartTypeValue]: KeepAliveParentDataMixin;
    get keepAlive(): boolean;
    readonly keptAlive: boolean;
    detach(): void;
    toString(): string;
    set keepAlive(value: boolean);
}
export declare const KeepAliveParentDataMixin: object & _FlaxInstanceType<KeepAliveParentDataMixin> & _FlaxDartType<KeepAliveParentDataMixin, readonly ["class", "flax.core/sdk_rendering#type:KeepAliveParentDataMixin", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keepAlive" | "keptAlive" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/sliver_multi_box_adaptor.dart::KeepAliveParentDataMixin" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData";
export {};
