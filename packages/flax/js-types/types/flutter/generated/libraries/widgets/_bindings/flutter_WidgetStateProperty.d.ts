import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T];
}> {
    readonly __WidgetStateProperty: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateProperty<T>;
    resolve(states: DartSetInput<upstream6.WidgetState, upstream6.WidgetState>): T;
}
export declare namespace _WidgetStatePropertyFactory {
    function fromMap<T extends unknown | null = unknown | null>(map: DartMapInput<upstream0.WidgetStatesConstraint, _FlaxDartOutput<T>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, (T | _FlaxDartOutput<T>)>): WidgetStateProperty<T>;
    function fromMap(map: DartMapInput<upstream0.WidgetStatesConstraint, unknown | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, unknown | null>): WidgetStateProperty<unknown | null>;
}
export declare namespace _WidgetStatePropertyFactory {
    function _flaxDefault_resolveAs<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>), states: DartSetInput<upstream6.WidgetState, upstream6.WidgetState>): _FlaxDartOutput<T>;
    export const resolveAs: _FlaxDartCallable<typeof _flaxDefault_resolveAs, _FlaxSignature1>;
    export {};
}
export declare namespace _WidgetStatePropertyFactory {
    function _flaxDefault_resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream6.WidgetState>) => (T | DartInput<T>))): WidgetStateProperty<T>;
    export const resolveWith: _FlaxDartCallable<typeof _flaxDefault_resolveWith, _FlaxSignature2>;
    export {};
}
export declare namespace _WidgetStatePropertyFactory {
    function _flaxDefault_all<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): WidgetStateProperty<_FlaxDartOutput<T>>;
    export const all: _FlaxDartCallable<typeof _flaxDefault_all, _FlaxSignature3>;
    export {};
}
export declare namespace _WidgetStatePropertyFactory {
    function _flaxDefault_lerp<T extends unknown | null = unknown | null>(a: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_FlaxDartOutput<T>];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_FlaxDartOutput<T>];
    }> | null, t: number, lerpFunction: ((p0: _FlaxDartOutput<T> | null, p1: _FlaxDartOutput<T> | null, p2: number) => (T | _FlaxDartOutput<T>) | null)): WidgetStateProperty<_FlaxDartOutput<T> | null> | null;
    export const lerp: _FlaxDartCallable<typeof _flaxDefault_lerp, _FlaxSignature4>;
    export {};
}
export declare const WidgetStateProperty: typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        fromMap: (map: DartMapInput<upstream0.WidgetStatesConstraint, _Selected0, Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
        }>, (_Selected0 | DartInput<_Selected0>)>) => WidgetStateProperty<_Selected0>;
        readonly prototype: WidgetStateProperty<_Selected0>;
    } & _FlaxInstanceType<WidgetStateProperty<_Selected0>> & _FlaxDartType<WidgetStateProperty<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (value: (_Selected0 | DartInput<_Selected0>), states: DartSetInput<upstream6.WidgetState, upstream6.WidgetState>) => _Selected0 : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (callback: ((states: DartSet<upstream6.WidgetState>) => (_Selected0 | DartInput<_Selected0>))) => WidgetStateProperty<_Selected0> : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (value: (_Selected0 | DartInput<_Selected0>)) => WidgetStateProperty<_Selected0> : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_Selected0];
    }> | null, b: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_Selected0];
    }> | null, t: number, lerpFunction: ((p0: _Selected0 | null, p1: _Selected0 | null, p2: number) => (_Selected0 | DartInput<_Selected0>) | null)) => WidgetStateProperty<_Selected0 | null> | null : never : never;
}
export {};
