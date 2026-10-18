import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import type * as upstream10 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SelectionContainerDelegate extends Omit<upstream0.SelectionHandler, _flaxOwnMembers0>, Omit<upstream1.ValueListenable<upstream2.SelectionGeometry>, _flaxOwnMembers0 | keyof upstream0.SelectionHandler>, Omit<upstream3.Listenable, _flaxOwnMembers0 | keyof upstream0.SelectionHandler | keyof upstream1.ValueListenable<upstream2.SelectionGeometry>>, Omit<upstream4.SelectionRegistrar, _flaxOwnMembers0 | keyof upstream0.SelectionHandler | keyof upstream1.ValueListenable<upstream2.SelectionGeometry> | keyof upstream3.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}> {
    readonly __SelectionContainerDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionContainerDelegate;
}
export interface SelectionContainerDelegate {
    readonly [_flaxDartTypeValue]: SelectionContainerDelegate;
    getTransformFrom(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): upstream12.Matrix4;
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
    }>) | null): upstream12.Matrix4;
    get hasSize(): boolean;
    get containerSize(): upstream5.Size;
}
export declare abstract class SelectionContainerDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionContainerDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectionContainerDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SelectionContainerDelegate", readonly [], false];
    constructor();
    abstract pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    abstract getSelectedContent(): upstream7.SelectedContent | null;
    abstract getSelection(): upstream8.SelectedContentRange | null;
    abstract dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream9.SelectionResult;
    abstract addListener(listener: (() => void)): void;
    abstract removeListener(listener: (() => void)): void;
    abstract add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    abstract remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    abstract get contentLength(): number;
    abstract get value(): upstream2.SelectionGeometry;
}
export declare namespace SelectionContainerDelegate {
    function implement(args: [], implementation: {
        pushHandleLayers: ((startHandle: upstream6.LayerLink | null, endHandle: upstream6.LayerLink | null) => void);
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
        dispatchSelectionEvent: ((event: upstream10.SelectionEvent) => upstream9.SelectionResult);
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        add: ((selectable: upstream11.Selectable) => void);
        remove: ((selectable: upstream11.Selectable) => void);
        get contentLength(): number;
        get value(): Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }): SelectionContainerDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "contentLength" | "value" | "hasSize" | "containerSize" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "addListener" | "removeListener" | "add" | "remove" | "getTransformFrom" | "getTransformTo" | "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar";
export {};
