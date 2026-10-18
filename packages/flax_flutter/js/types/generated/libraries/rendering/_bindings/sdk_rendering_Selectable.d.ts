import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Selectable extends Omit<upstream0.SelectionHandler, _flaxOwnMembers0>, Omit<upstream1.ValueListenable<upstream2.SelectionGeometry>, _flaxOwnMembers0 | keyof upstream0.SelectionHandler>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.SelectionHandler | keyof upstream1.ValueListenable<upstream2.SelectionGeometry>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __Selectable: unique symbol;
    readonly [_flaxDartTypeValue]: Selectable;
    readonly contentLength: number;
    readonly value: upstream2.SelectionGeometry;
    readonly size: upstream4.Size;
    readonly boundingBoxes: DartList<upstream5.Rect>;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream7.SelectedContent | null;
    getSelection(): upstream8.SelectedContentRange | null;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream9.SelectionResult;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    getTransformTo(ancestor: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): upstream11.Matrix4;
    dispose(): void;
}
export declare const Selectable: object & _FlaxInstanceType<Selectable> & _FlaxDartType<Selectable, readonly ["class", "flax.core/sdk_rendering#type:Selectable", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "contentLength" | "value" | "size" | "boundingBoxes" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "addListener" | "removeListener" | "getTransformTo" | "dispose" | "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
