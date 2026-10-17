import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MouseCursor extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MouseCursor: unique symbol;
    readonly debugDescription: string;
    toString(): string;
    toStringShort(): string;
}
declare const _MouseCursorFactory: {
    readonly defer: MouseCursor;
    readonly uncontrolled: MouseCursor;
};
export declare const MouseCursor: typeof _MouseCursorFactory & _FlaxInstanceType<MouseCursor> & _FlaxDartType<MouseCursor, readonly ["class", "flax.core/flutter#type:MouseCursor", readonly [], false]>;
export {};
