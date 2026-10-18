import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RadioGroupRegistry';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadioClient<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioClient": readonly [T];
}> {
    readonly __RadioClient: unique symbol;
    readonly [_flaxDartTypeValue]: RadioClient<T>;
    readonly tristate: boolean;
    readonly radioValue: T;
    readonly enabled: boolean;
    readonly focusNode: upstream0.FocusNode;
    get registry(): upstream1.RadioGroupRegistry<T> | null;
    set registry(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [T];
    }> | null);
}
export declare const RadioClient: object & _FlaxInstanceType<RadioClient<unknown | null>> & _FlaxDartType<RadioClient<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:RadioClient", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: RadioClient<_Selected0>;
    } & _FlaxInstanceType<RadioClient<_Selected0>> & _FlaxDartType<RadioClient<_Selected0>> : never : never;
}
export {};
