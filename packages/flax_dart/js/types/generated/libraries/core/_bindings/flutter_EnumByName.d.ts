import { type DartIterableInput, type DartMap, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature } from '@flax/core/bindings';
import type { flaxDartExtensionTypes as _flaxDartExtensionTypes } from '@flax/core/bindings';
export interface EnumByName<T extends upstream0.Enum = upstream0.Enum> {
    readonly [_flaxDartExtensionTypes]?: readonly [T];
    readonly [_flaxDartMethodCases]?: {
        asNameMap: _FlaxSignature0;
        byName: _FlaxSignature1;
    };
    asNameMap(this: EnumByName<T>): DartMap<string, T>;
    byName(this: EnumByName<T>, name: string): T;
}
export declare const EnumByName: {
    <T extends upstream0.Enum = upstream0.Enum>(receiver: DartIterableInput<T, (T | DartInput<T>)>): EnumByName<T>;
};
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? () => DartMap<string, _Selected0> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Enum] ? (name: string) => _Selected0 : never : never;
}
export {};
