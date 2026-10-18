import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionHandler extends Omit<upstream0.ValueListenable<upstream1.SelectionGeometry>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.ValueListenable<upstream1.SelectionGeometry>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SelectionHandler: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionHandler;
    readonly value: upstream1.SelectionGeometry;
    readonly contentLength: number;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream4.SelectedContent | null;
    getSelection(): upstream5.SelectedContentRange | null;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream6.SelectionResult;
}
export declare namespace _SelectionHandlerFactory {
    function implement(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        pushHandleLayers: ((startHandle: upstream3.LayerLink | null, endHandle: upstream3.LayerLink | null) => void);
        getSelectedContent: (() => (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        getSelection: (() => (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectedContentRange": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null);
        dispatchSelectionEvent: ((event: upstream7.SelectionEvent) => upstream6.SelectionResult);
        get contentLength(): number;
        get value(): Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): SelectionHandler;
}
export declare const SelectionHandler: typeof _SelectionHandlerFactory & _FlaxInstanceType<SelectionHandler> & _FlaxDartType<SelectionHandler, readonly ["class", "flax.core/sdk_rendering#type:SelectionHandler", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "contentLength" | "addListener" | "removeListener" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
