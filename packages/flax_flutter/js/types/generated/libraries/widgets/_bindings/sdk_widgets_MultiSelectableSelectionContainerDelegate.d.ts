import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionContainerDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionContainerDelegate';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectAllSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectWordSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectParagraphSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClearSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_GranularlyExtendSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_DirectionallyExtendSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEdgeUpdateEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MultiSelectableSelectionContainerDelegate extends Omit<upstream0.SelectionContainerDelegate, _flaxOwnMembers0>, Omit<upstream1.SelectionHandler, _flaxOwnMembers0 | keyof upstream0.SelectionContainerDelegate>, Omit<upstream2.ValueListenable<upstream3.SelectionGeometry>, _flaxOwnMembers0 | keyof upstream0.SelectionContainerDelegate | keyof upstream1.SelectionHandler>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.SelectionContainerDelegate | keyof upstream1.SelectionHandler | keyof upstream2.ValueListenable<upstream3.SelectionGeometry>>, Omit<upstream5.SelectionRegistrar, _flaxOwnMembers0 | keyof upstream0.SelectionContainerDelegate | keyof upstream1.SelectionHandler | keyof upstream2.ValueListenable<upstream3.SelectionGeometry> | keyof upstream4.Listenable>, Omit<upstream6.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.SelectionContainerDelegate | keyof upstream1.SelectionHandler | keyof upstream2.ValueListenable<upstream3.SelectionGeometry> | keyof upstream4.Listenable | keyof upstream5.SelectionRegistrar>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::MultiSelectableSelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __MultiSelectableSelectionContainerDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: MultiSelectableSelectionContainerDelegate;
}
export interface MultiSelectableSelectionContainerDelegate {
    readonly [_flaxDartTypeValue]: MultiSelectableSelectionContainerDelegate;
    getTransformFrom(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): upstream9.Matrix4;
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
    }>) | null): upstream9.Matrix4;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream12.SelectedContent | null;
    getSelection(): upstream13.SelectedContentRange | null;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    dispose(): void;
    layoutDidChange(): void;
    didChangeSelectables(): void;
    getSelectionGeometry(): upstream3.SelectionGeometry;
    handleSelectAll(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleSelectWord(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleSelectParagraph(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleClearSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleGranularlyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleDirectionallyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    handleSelectionEdgeUpdate(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    dispatchSelectionEventToChild(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream14.SelectionResult;
    get selectables(): DartList<upstream8.Selectable>;
    get currentSelectionEndIndex(): number;
    get currentSelectionStartIndex(): number;
    get value(): upstream3.SelectionGeometry;
    get compareOrder(): ((a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) => number);
    get contentLength(): number;
    get hasSize(): boolean;
    get containerSize(): upstream7.Size;
    get hasListeners(): boolean;
    set selectables(value: DartListInput<upstream8.Selectable, Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>);
    set currentSelectionEndIndex(value: number);
    set currentSelectionStartIndex(value: number);
}
export declare abstract class MultiSelectableSelectionContainerDelegate extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MultiSelectableSelectionContainerDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MultiSelectableSelectionContainerDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MultiSelectableSelectionContainerDelegate", readonly [], false];
    constructor();
    abstract ensureChildUpdated(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
}
export declare namespace MultiSelectableSelectionContainerDelegate {
    function implement(args: [], implementation: {
        ensureChildUpdated: ((selectable: upstream8.Selectable) => void);
    }): MultiSelectableSelectionContainerDelegate;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasSize" | "containerSize" | "contentLength" | "value" | "hasListeners" | "selectables" | "currentSelectionEndIndex" | "currentSelectionStartIndex" | "compareOrder" | "getTransformFrom" | "getTransformTo" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "dispatchSelectionEvent" | "addListener" | "removeListener" | "add" | "remove" | "dispose" | "layoutDidChange" | "didChangeSelectables" | "getSelectionGeometry" | "handleSelectAll" | "handleSelectWord" | "handleSelectParagraph" | "handleClearSelection" | "handleGranularlyExtendSelection" | "handleDirectionallyExtendSelection" | "handleSelectionEdgeUpdate" | "ensureChildUpdated" | "dispatchSelectionEventToChild" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::MultiSelectableSelectionContainerDelegate" | "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier";
export {};
