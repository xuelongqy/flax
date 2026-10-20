import { type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable } from '@flax/core/bindings';
declare function _flaxTopLevel_showCupertinoSheet<T extends unknown | null = unknown | null>(options: {
    builder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
    context: upstream0.BuildContext;
    enableDrag?: boolean | undefined;
    pageBuilder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
    scrollableBuilder?: ((context: upstream0.BuildContext, scrollController: upstream1.ScrollController) => Widget) | null | undefined;
    settings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    showDragHandle?: boolean | undefined;
    topGap?: number | null | undefined;
    useNestedNavigation?: boolean | undefined;
}): Promise<_FlaxDartOutput<T> | null>;
declare const _flaxGeneric_showCupertinoSheet: _FlaxDartCallable<typeof _flaxTopLevel_showCupertinoSheet, _FlaxSignature0>;
export { _flaxGeneric_showCupertinoSheet as showCupertinoSheet };
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (options: {
        builder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
        context: upstream0.BuildContext;
        enableDrag?: boolean | undefined;
        pageBuilder?: ((context: upstream0.BuildContext) => Widget) | null | undefined;
        scrollableBuilder?: ((context: upstream0.BuildContext, scrollController: upstream1.ScrollController) => Widget) | null | undefined;
        settings?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
        }> | null | undefined;
        showDragHandle?: boolean | undefined;
        topGap?: number | null | undefined;
        useNestedNavigation?: boolean | undefined;
    }) => Promise<_Selected0 | null> : never : never;
}
