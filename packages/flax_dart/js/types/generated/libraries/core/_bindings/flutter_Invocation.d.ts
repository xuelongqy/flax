import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Symbol';
import '@flax/dart/core/_bindings/flutter_Symbol';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Invocation extends Readonly<{
    "__flaxBound:dart:core::Invocation": readonly [];
}> {
    readonly __Invocation: unique symbol;
    readonly memberName: upstream0.Symbol;
    readonly positionalArguments: DartList<unknown | null>;
    readonly namedArguments: DartMap<upstream0.Symbol, unknown | null>;
    readonly isGetter: boolean;
    readonly isSetter: boolean;
    readonly isMethod: boolean;
    readonly isAccessor: boolean;
}
export declare const Invocation: object & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]>;
