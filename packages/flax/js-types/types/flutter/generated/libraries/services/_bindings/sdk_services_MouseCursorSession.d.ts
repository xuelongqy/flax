import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MouseCursorSession extends Readonly<{
    "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursorSession": readonly [];
}> {
    readonly __MouseCursorSession: unique symbol;
    readonly [_flaxDartTypeValue]: MouseCursorSession;
}
export interface MouseCursorSession {
    readonly [_flaxDartTypeValue]: MouseCursorSession;
    get cursor(): upstream0.MouseCursor;
    get device(): number;
}
export declare abstract class MouseCursorSession extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MouseCursorSession>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MouseCursorSession;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:MouseCursorSession", readonly [], false];
    constructor(cursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, device: number);
    abstract activate(): Promise<void>;
    abstract dispose(): void;
}
export declare namespace MouseCursorSession {
    function implement(args: [cursor: Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, device: number], implementation: {
        activate: (() => Promise<void>);
        dispose: (() => void);
    }): MouseCursorSession;
}
