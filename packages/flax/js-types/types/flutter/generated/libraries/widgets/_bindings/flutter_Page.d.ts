import { type NavigationData, type DartValue } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
export interface Page<T extends unknown | null = unknown | null> extends DartValue {
    readonly __Page: unique symbol;
    readonly key: upstream0.LocalKey | null;
    readonly name: string | null;
    readonly arguments: NavigationData | null;
}
