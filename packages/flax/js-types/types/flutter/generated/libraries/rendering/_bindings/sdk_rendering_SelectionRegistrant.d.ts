import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionRegistrant extends Omit<upstream0.Selectable, _flaxOwnMembers0>, Omit<upstream1.SelectionHandler, _flaxOwnMembers0 | keyof upstream0.Selectable>, Omit<upstream2.ValueListenable<upstream3.SelectionGeometry>, _flaxOwnMembers0 | keyof upstream0.Selectable | keyof upstream1.SelectionHandler>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.Selectable | keyof upstream1.SelectionHandler | keyof upstream2.ValueListenable<upstream3.SelectionGeometry>>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrant": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __SelectionRegistrant: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionRegistrant;
    readonly size: upstream5.Size;
    readonly boundingBoxes: DartList<upstream6.Rect>;
    readonly contentLength: number;
    readonly value: upstream3.SelectionGeometry;
    get registrar(): upstream7.SelectionRegistrar | null;
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
    }>) | null): upstream8.Matrix4;
    dispose(): void;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream11.SelectedContent | null;
    getSelection(): upstream12.SelectedContentRange | null;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    set registrar(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
    }> | null);
}
export declare const SelectionRegistrant: object & _FlaxInstanceType<SelectionRegistrant> & _FlaxDartType<SelectionRegistrant, readonly ["class", "flax.core/sdk_rendering#type:SelectionRegistrant", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "size" | "boundingBoxes" | "contentLength" | "value" | "registrar" | "getTransformTo" | "dispose" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrant" | "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
