import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type DartValue, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPage<T extends unknown | null = unknown | null> extends DartValue, Omit<upstream0.Page<T>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPage": readonly [T];
}>, 'type'> {
    readonly type: "flax.material/material#type:MaterialPage";
    readonly __MaterialPage: unique symbol;
    readonly key: upstream1.LocalKey | null;
    readonly name: string | null;
    readonly arguments: NavigationData | null;
}
declare function _MaterialPageFactory<T extends unknown | null = unknown | null>(options: {
    child: Widget;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> | null | undefined;
    canPop?: boolean | undefined;
    onPopInvoked?: ((didPop: boolean, result: NavigationData | null) => void) | undefined;
    name?: string | null | undefined;
    arguments?: NavigationData | null | undefined;
}): MaterialPage<T>;
export declare const MaterialPage: typeof _MaterialPageFactory & _FlaxInstanceType<MaterialPage<unknown | null>> & _FlaxDartType<MaterialPage<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPage", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            child: Widget;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
            }> | null | undefined;
            canPop?: boolean | undefined;
            onPopInvoked?: ((didPop: boolean, result: NavigationData | null) => void) | undefined;
            name?: string | null | undefined;
            arguments?: NavigationData | null | undefined;
        }): MaterialPage<_Selected0>;
        readonly prototype: MaterialPage<_Selected0>;
    } & _FlaxInstanceType<MaterialPage<_Selected0>> & _FlaxDartType<MaterialPage<_Selected0>> : never : never;
}
export {};
