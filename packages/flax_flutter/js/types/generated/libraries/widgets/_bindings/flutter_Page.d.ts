import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Page<T extends unknown | null = unknown | null> extends Omit<upstream0.RouteSettings, typeof _flaxDartTypeValue | "name" | "arguments" | "key" | "restorationId" | "onPopInvoked" | "canPop" | "toString" | "canUpdate" | "createRoute">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [T];
}> {
    readonly __Page: unique symbol;
    readonly name: string | null;
    readonly arguments: unknown | null;
    readonly key: upstream1.LocalKey | null;
    readonly restorationId: string | null;
    readonly onPopInvoked: ((didPop: boolean, result: (T | DartInput<T>) | null) => void);
    readonly canPop: boolean;
    toString(): string;
    canUpdate(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null];
    }>): boolean;
    createRoute(context: upstream3.BuildContext): upstream2.Route<T>;
}
export declare const Page: object & _FlaxInstanceType<Page<unknown | null>> & _FlaxDartType<Page<unknown | null>, readonly ["class", "flax.core/flutter#type:Page", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: Page<_Selected0>;
    } & _FlaxInstanceType<Page<_Selected0>> & _FlaxDartType<Page<_Selected0>> : never : never;
}
export {};
