import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiSelectableSelectionContainerDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiSelectableSelectionContainerDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionContainerDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionContainerDelegate';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionHandler';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContent';
import type * as upstream12 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectedContentRange';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionResult';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectAllSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectWordSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectParagraphSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClearSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_GranularlyExtendSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_DirectionallyExtendSelectionEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEdgeUpdateEvent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionEvent';
import type * as upstream22 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StaticSelectionContainerDelegate extends Omit<upstream0.MultiSelectableSelectionContainerDelegate, _flaxOwnMembers0>, Omit<upstream1.SelectionContainerDelegate, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate>, Omit<upstream2.SelectionHandler, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate | keyof upstream1.SelectionContainerDelegate>, Omit<upstream3.ValueListenable<upstream4.SelectionGeometry>, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate | keyof upstream1.SelectionContainerDelegate | keyof upstream2.SelectionHandler>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate | keyof upstream1.SelectionContainerDelegate | keyof upstream2.SelectionHandler | keyof upstream3.ValueListenable<upstream4.SelectionGeometry>>, Omit<upstream6.SelectionRegistrar, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate | keyof upstream1.SelectionContainerDelegate | keyof upstream2.SelectionHandler | keyof upstream3.ValueListenable<upstream4.SelectionGeometry> | keyof upstream5.Listenable>, Omit<upstream7.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.MultiSelectableSelectionContainerDelegate | keyof upstream1.SelectionContainerDelegate | keyof upstream2.SelectionHandler | keyof upstream3.ValueListenable<upstream4.SelectionGeometry> | keyof upstream5.Listenable | keyof upstream6.SelectionRegistrar>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::StaticSelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::MultiSelectableSelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __StaticSelectionContainerDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: StaticSelectionContainerDelegate;
    get selectables(): DartList<upstream8.Selectable>;
    get currentSelectionEndIndex(): number;
    get currentSelectionStartIndex(): number;
    readonly value: upstream4.SelectionGeometry;
    readonly compareOrder: ((a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) => number);
    readonly contentLength: number;
    readonly hasSize: boolean;
    readonly containerSize: upstream9.Size;
    readonly hasListeners: boolean;
    add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    layoutDidChange(): void;
    didChangeSelectables(): void;
    getSelectionGeometry(): upstream4.SelectionGeometry;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream11.SelectedContent | null;
    getSelection(): upstream12.SelectedContentRange | null;
    handleSelectAll(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectWord(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectParagraph(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleClearSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleGranularlyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleDirectionallyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectionEdgeUpdate(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    dispose(): void;
    ensureChildUpdated(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    dispatchSelectionEventToChild(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    getTransformFrom(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): upstream22.Matrix4;
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
    }>) | null): upstream22.Matrix4;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    didReceiveSelectionEventFor(options: {
        forEnd?: boolean | null | undefined;
        selectable: Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
    }): void;
    didReceiveSelectionBoundaryEvents(): void;
    updateLastSelectionEdgeLocation(options: {
        forEnd: boolean;
        globalSelectionEdgeLocation: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }): void;
    clearInternalSelectionState(): void;
    clearInternalSelectionStateForSelectable(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    set selectables(value: DartListInput<upstream8.Selectable, Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>);
    set currentSelectionEndIndex(value: number);
    set currentSelectionStartIndex(value: number);
}
export declare function _StaticSelectionContainerDelegateFactory(): StaticSelectionContainerDelegate;
export interface _StaticSelectionContainerDelegateNative extends StaticSelectionContainerDelegate {
    readonly [_flaxDartTypeValue]: _StaticSelectionContainerDelegateNative;
    add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    layoutDidChange(): void;
    didChangeSelectables(): void;
    getSelectionGeometry(): upstream4.SelectionGeometry;
    pushHandleLayers(startHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null, endHandle: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null): void;
    getSelectedContent(): upstream11.SelectedContent | null;
    getSelection(): upstream12.SelectedContentRange | null;
    handleSelectAll(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectAllSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectWord(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectWordSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectParagraph(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectParagraphSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleClearSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::ClearSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleGranularlyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::GranularlyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleDirectionallyExtendSelection(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::DirectionallyExtendSelectionEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    handleSelectionEdgeUpdate(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEdgeUpdateEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    dispatchSelectionEvent(event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    dispose(): void;
    ensureChildUpdated(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    dispatchSelectionEventToChild(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, event: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionEvent": readonly [];
    }>): upstream13.SelectionResult;
    getTransformFrom(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): upstream22.Matrix4;
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
    }>) | null): upstream22.Matrix4;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    didReceiveSelectionEventFor(options: {
        selectable: Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        forEnd?: boolean | null | undefined;
    }): void;
    didReceiveSelectionBoundaryEvents(): void;
    updateLastSelectionEdgeLocation(options: {
        globalSelectionEdgeLocation: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        forEnd: boolean;
    }): void;
    clearInternalSelectionState(): void;
    clearInternalSelectionStateForSelectable(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    get selectables(): DartList<upstream8.Selectable>;
    get currentSelectionEndIndex(): number;
    get currentSelectionStartIndex(): number;
    get value(): upstream4.SelectionGeometry;
    get compareOrder(): ((a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) => number);
    get contentLength(): number;
    get hasSize(): boolean;
    get containerSize(): upstream9.Size;
    get hasListeners(): boolean;
    set selectables(value: DartListInput<upstream8.Selectable, Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream4.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>);
    set currentSelectionEndIndex(value: number);
    set currentSelectionStartIndex(value: number);
}
export declare abstract class _StaticSelectionContainerDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StaticSelectionContainerDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StaticSelectionContainerDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:StaticSelectionContainerDelegate", readonly [], false];
    constructor();
}
export declare namespace _StaticSelectionContainerDelegateFactory {
    function implement(args: [], implementation: {}): StaticSelectionContainerDelegate;
}
declare const _StaticSelectionContainerDelegateBinding: typeof _StaticSelectionContainerDelegateFactory & (new () => _StaticSelectionContainerDelegateNative);
export declare const StaticSelectionContainerDelegate: typeof _StaticSelectionContainerDelegateBinding & _FlaxInstanceType<StaticSelectionContainerDelegate> & _FlaxDartType<StaticSelectionContainerDelegate, readonly ["class", "flax.core/sdk_widgets#type:StaticSelectionContainerDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "selectables" | "currentSelectionEndIndex" | "currentSelectionStartIndex" | "value" | "compareOrder" | "contentLength" | "hasSize" | "containerSize" | "hasListeners" | "add" | "remove" | "layoutDidChange" | "didChangeSelectables" | "getSelectionGeometry" | "pushHandleLayers" | "getSelectedContent" | "getSelection" | "handleSelectAll" | "handleSelectWord" | "handleSelectParagraph" | "handleClearSelection" | "handleGranularlyExtendSelection" | "handleDirectionallyExtendSelection" | "handleSelectionEdgeUpdate" | "dispatchSelectionEvent" | "dispose" | "ensureChildUpdated" | "dispatchSelectionEventToChild" | "getTransformFrom" | "getTransformTo" | "addListener" | "removeListener" | "didReceiveSelectionEventFor" | "didReceiveSelectionBoundaryEvents" | "updateLastSelectionEdgeLocation" | "clearInternalSelectionState" | "clearInternalSelectionStateForSelectable" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::StaticSelectionContainerDelegate" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::MultiSelectableSelectionContainerDelegate" | "__flaxBound:package:flutter/src/widgets/selection_container.dart::SelectionContainerDelegate" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier";
export {};
