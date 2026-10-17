import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SystemMouseCursor extends Omit<upstream0.MouseCursor, typeof _flaxDartTypeValue | "debugDescription" | "kind" | "toString" | "toStringShort">, Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::SystemMouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SystemMouseCursor: unique symbol;
    readonly debugDescription: string;
    readonly kind: string;
    toString(): string;
    toStringShort(): string;
}
export declare const SystemMouseCursor: object & _FlaxInstanceType<SystemMouseCursor> & _FlaxDartType<SystemMouseCursor, readonly ["class", "flax.core/flutter#type:SystemMouseCursor", readonly [], false]>;
