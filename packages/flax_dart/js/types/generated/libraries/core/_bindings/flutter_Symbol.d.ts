import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Symbol extends Readonly<{
    "__flaxBound:dart:core::Symbol": readonly [];
}> {
    readonly __Symbol: unique symbol;
    toString(): string;
}
declare function _SymbolFactory(name: string): Symbol;
declare namespace _SymbolFactory {
    const empty: Symbol;
}
declare namespace _SymbolFactory {
    const unaryMinus: Symbol;
}
export declare const Symbol: typeof _SymbolFactory & _FlaxInstanceType<Symbol> & _FlaxDartType<Symbol, readonly ["class", "flax.core/flutter#type:Symbol", readonly [], false]>;
export {};
