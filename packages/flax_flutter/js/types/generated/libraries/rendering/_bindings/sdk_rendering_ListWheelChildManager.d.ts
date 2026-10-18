import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListWheelChildManager extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/list_wheel_viewport.dart::ListWheelChildManager": readonly [];
}> {
    readonly __ListWheelChildManager: unique symbol;
    readonly [_flaxDartTypeValue]: ListWheelChildManager;
    readonly childCount: number | null;
    childExistsAt(index: number): boolean;
    createChild(index: number, options: {
        after: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null;
    }): void;
    removeChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
}
export declare namespace _ListWheelChildManagerFactory {
    function implement(args: [], implementation: {
        childExistsAt: ((index: number) => boolean);
        createChild: ((index: number, options: {
            after: upstream0.RenderBox | null;
        }) => void);
        removeChild: ((child: upstream0.RenderBox) => void);
        get childCount(): number | null;
    }): ListWheelChildManager;
}
export declare const ListWheelChildManager: typeof _ListWheelChildManagerFactory & _FlaxInstanceType<ListWheelChildManager> & _FlaxDartType<ListWheelChildManager, readonly ["class", "flax.core/sdk_rendering#type:ListWheelChildManager", readonly [], false]>;
