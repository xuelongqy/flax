import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectableRegion';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionRegistrar';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import '@flax/flutter/services/_bindings/sdk_services_TextSelectionDelegate';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionToolbarAnchors';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ContextMenuButtonItem';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream15 from '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/flutter/services/_bindings/sdk_services_SelectionChangedCause';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream17 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectableRegionState extends Omit<upstream0.State<upstream1.SelectableRegion>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SelectableRegion>>, Omit<upstream3.SelectionRegistrar, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SelectableRegion> | keyof upstream2.Diagnosticable>, Omit<upstream4.TextSelectionDelegate, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SelectableRegion> | keyof upstream2.Diagnosticable | keyof upstream3.SelectionRegistrar>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.SelectableRegion];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
}> {
    readonly __SelectableRegionState: unique symbol;
    readonly [_flaxDartTypeValue]: SelectableRegionState;
    get textEditingValue(): upstream5.TextEditingValue;
    readonly cutEnabled: boolean;
    readonly copyEnabled: boolean;
    readonly pasteEnabled: boolean;
    readonly selectAllEnabled: boolean;
    readonly lookUpEnabled: boolean;
    readonly searchWebEnabled: boolean;
    readonly shareEnabled: boolean;
    readonly liveTextInputEnabled: boolean;
    readonly contextMenuAnchors: upstream6.TextSelectionToolbarAnchors;
    readonly contextMenuButtonItems: DartList<upstream7.ContextMenuButtonItem>;
    readonly startGlyphHeight: number;
    readonly endGlyphHeight: number;
    readonly selectionEndpoints: DartList<upstream8.TextSelectionPoint>;
    readonly widget: upstream1.SelectableRegion;
    readonly context: upstream9.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream17.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream17.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    userUpdateTextEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>, cause: upstream15.SelectionChangedCause): void;
    hideToolbar(hideHandles?: boolean): void;
    bringIntoView(position: Readonly<{
        "__flaxBound:dart:ui::TextPosition": readonly [];
    }>): void;
    cutSelection(cause: upstream15.SelectionChangedCause): void;
    pasteText(cause: upstream15.SelectionChangedCause): Promise<void>;
    selectAll(cause?: upstream15.SelectionChangedCause | null): void;
    copySelection(cause: upstream15.SelectionChangedCause): void;
    initState(): void;
    didChangeDependencies(): void;
    didUpdateWidget(oldWidget: upstream1.SelectableRegion): void;
    clearSelection(): void;
    dispose(): void;
    build(context: upstream9.BuildContext): Widget;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    set textEditingValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>);
}
export declare function _SelectableRegionStateFactory(): SelectableRegionState;
export declare const SelectableRegionState: typeof _SelectableRegionStateFactory & _FlaxInstanceType<SelectableRegionState> & _FlaxDartType<SelectableRegionState, readonly ["class", "flax.core/sdk_widgets#type:SelectableRegionState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textEditingValue" | "cutEnabled" | "copyEnabled" | "pasteEnabled" | "selectAllEnabled" | "lookUpEnabled" | "searchWebEnabled" | "shareEnabled" | "liveTextInputEnabled" | "contextMenuAnchors" | "contextMenuButtonItems" | "startGlyphHeight" | "endGlyphHeight" | "selectionEndpoints" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "add" | "remove" | "userUpdateTextEditingValue" | "hideToolbar" | "bringIntoView" | "cutSelection" | "pasteText" | "selectAll" | "copySelection" | "initState" | "didChangeDependencies" | "didUpdateWidget" | "clearSelection" | "dispose" | "build" | "reassemble" | "setState" | "deactivate" | "activate" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectableRegionState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar" | "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate";
export {};
