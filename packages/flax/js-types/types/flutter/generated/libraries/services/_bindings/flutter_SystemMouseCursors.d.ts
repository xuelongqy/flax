import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_SystemMouseCursor';
import '@flax/flutter/services/_bindings/flutter_SystemMouseCursor';
export interface SystemMouseCursors extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::SystemMouseCursors": readonly [];
}> {
    readonly __SystemMouseCursors: unique symbol;
}
declare const _SystemMouseCursorsFactory: {
    readonly basic: upstream0.SystemMouseCursor;
    readonly click: upstream0.SystemMouseCursor;
    readonly text: upstream0.SystemMouseCursor;
    readonly forbidden: upstream0.SystemMouseCursor;
};
export declare const SystemMouseCursors: typeof _SystemMouseCursorsFactory & _FlaxInstanceType<SystemMouseCursors>;
export {};
