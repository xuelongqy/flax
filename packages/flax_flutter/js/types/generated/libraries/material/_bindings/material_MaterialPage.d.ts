import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type DartValue, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
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
export declare const MaterialPage: typeof _MaterialPageFactory & _FlaxInstanceType<MaterialPage<unknown | null>> & _FlaxDartType<MaterialPage<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPage", readonly [readonly ["any", null, readonly [], true]], false]>;
export {};
