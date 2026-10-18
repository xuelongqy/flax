import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput, type DartList, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Symbol';
import '@flax/dart/core/_bindings/flutter_Symbol';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Invocation extends Readonly<{
    "__flaxBound:dart:core::Invocation": readonly [];
}> {
    readonly __Invocation: unique symbol;
    readonly [_flaxDartTypeValue]: Invocation;
    readonly memberName: upstream0.Symbol;
    readonly typeArguments: DartList<upstream1.Type>;
    readonly positionalArguments: DartList<unknown | null>;
    readonly namedArguments: DartMap<upstream0.Symbol, unknown | null>;
    readonly isMethod: boolean;
    readonly isGetter: boolean;
    readonly isSetter: boolean;
    readonly isAccessor: boolean;
}
export declare namespace _InvocationFactory {
    function method(memberName: Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>, positionalArguments: DartIterableInput<unknown | null, unknown | null> | null, namedArguments?: DartMapInput<upstream0.Symbol, unknown | null, Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>, unknown | null> | null): Invocation;
}
export declare namespace _InvocationFactory {
    function genericMethod(memberName: Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>, typeArguments: DartIterableInput<upstream1.Type, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>> | null, positionalArguments: DartIterableInput<unknown | null, unknown | null> | null, namedArguments?: DartMapInput<upstream0.Symbol, unknown | null, Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>, unknown | null> | null): Invocation;
}
export declare namespace _InvocationFactory {
    function getter(name: Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>): Invocation;
}
export declare namespace _InvocationFactory {
    function setter(memberName: Readonly<{
        "__flaxBound:dart:core::Symbol": readonly [];
    }>, argument: unknown | null): Invocation;
}
export declare const Invocation: typeof _InvocationFactory & _FlaxInstanceType<Invocation> & _FlaxDartType<Invocation, readonly ["class", "flax.core/flutter#type:Invocation", readonly [], false]>;
