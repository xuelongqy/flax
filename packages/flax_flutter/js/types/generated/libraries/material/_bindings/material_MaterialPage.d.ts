import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Page';
import '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPage<T extends unknown | null = unknown | null> extends upstream0.Page<T>, upstream1.RouteSettings, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPage": readonly [T];
}> {
    readonly __MaterialPage: unique symbol;
    readonly name: string | null;
    readonly arguments: unknown | null;
    readonly key: upstream2.LocalKey | null;
}
declare function _MaterialPageFactory(options: {
    child: Widget;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> | null | undefined;
    canPop?: boolean | undefined;
    onPopInvoked?: ((didPop: boolean, result: unknown | null) => void) | undefined;
    name?: string | null | undefined;
    arguments?: unknown | null | undefined;
}): MaterialPage<unknown | null>;
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
            onPopInvoked?: ((didPop: boolean, result: _Selected0 | null) => void) | undefined;
            name?: string | null | undefined;
            arguments?: unknown | null | undefined;
        }): MaterialPage<_Selected0>;
        readonly prototype: MaterialPage<_Selected0>;
    } & _FlaxInstanceType<MaterialPage<_Selected0>> & _FlaxDartType<MaterialPage<_Selected0>> : never : never;
}
export {};
