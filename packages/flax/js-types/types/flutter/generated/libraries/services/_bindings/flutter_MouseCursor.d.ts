import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface MouseCursor extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MouseCursor: unique symbol;
}
declare const _MouseCursorFactory: {
    readonly defer: MouseCursor;
    readonly uncontrolled: MouseCursor;
};
export declare const MouseCursor: typeof _MouseCursorFactory & _FlaxInstanceType<MouseCursor>;
export {};
