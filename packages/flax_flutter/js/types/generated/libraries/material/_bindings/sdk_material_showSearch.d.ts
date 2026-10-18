import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/material/_bindings/sdk_material_SearchDelegate';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showSearch<T extends unknown | null = unknown | null>(options: {
    context: upstream0.BuildContext;
    delegate: Readonly<{
        "__flaxBound:package:flutter/src/material/search.dart::SearchDelegate": readonly [_FlaxDartOutput<T>];
    }>;
    maintainState?: boolean | undefined;
    query?: string | null | undefined;
    useRootNavigator?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showSearch: _FlaxDartCallable<typeof _flaxTopLevel_showSearch, _FlaxSignature0>;
export { _flaxGeneric_showSearch as showSearch };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        context: upstream0.BuildContext;
        delegate: Readonly<{
            "__flaxBound:package:flutter/src/material/search.dart::SearchDelegate": readonly [_Selected0];
        }>;
        maintainState?: boolean | undefined;
        query?: string | null | undefined;
        useRootNavigator?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
