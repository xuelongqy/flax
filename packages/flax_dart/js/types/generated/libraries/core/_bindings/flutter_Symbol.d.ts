import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Symbol extends Readonly<{
    "__flaxBound:dart:core::Symbol": readonly [];
}> {
    readonly __Symbol: unique symbol;
    readonly [_flaxDartTypeValue]: Symbol;
    toString(): string;
}
export declare function _SymbolFactory(name: string): Symbol;
export declare namespace _SymbolFactory {
    const unaryMinus: Symbol;
}
export declare namespace _SymbolFactory {
    const empty: Symbol;
}
export declare const Symbol: typeof _SymbolFactory & _FlaxInstanceType<Symbol> & _FlaxDartType<Symbol, readonly ["class", "flax.core/flutter#type:Symbol", readonly [], false]>;
