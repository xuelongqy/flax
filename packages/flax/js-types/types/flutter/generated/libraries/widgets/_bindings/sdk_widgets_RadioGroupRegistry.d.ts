import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RadioClient';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RadioClient';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RadioGroupRegistry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioGroupRegistry": readonly [T];
}> {
    readonly __RadioGroupRegistry: unique symbol;
    readonly [_flaxDartTypeValue]: RadioGroupRegistry<T>;
    readonly groupValue: T | null;
    readonly onChanged: ((value: (T | DartInput<T>) | null) => void);
    registerClient(radio: Readonly<{
        "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioClient": readonly [T];
    }>): void;
    unregisterClient(radio: Readonly<{
        "__flaxBound:package:flutter/src/widgets/radio_group.dart::RadioClient": readonly [T];
    }>): void;
}
export declare namespace _RadioGroupRegistryFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        registerClient: ((radio: upstream0.RadioClient<T>) => void);
        unregisterClient: ((radio: upstream0.RadioClient<T>) => void);
        get groupValue(): (T | DartInput<T>) | null;
        get onChanged(): ((value: T | null) => void);
    }): RadioGroupRegistry<T>;
}
export declare const RadioGroupRegistry: typeof _RadioGroupRegistryFactory & _FlaxInstanceType<RadioGroupRegistry<unknown | null>> & _FlaxDartType<RadioGroupRegistry<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:RadioGroupRegistry", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: RadioGroupRegistry<_Selected0>;
        implement(args: readonly [], implementation: Partial<RadioGroupRegistry<_Selected0>>): RadioGroupRegistry<_Selected0>;
    } & _FlaxInstanceType<RadioGroupRegistry<_Selected0>> & _FlaxDartType<RadioGroupRegistry<_Selected0>> : never : never;
}
export {};
