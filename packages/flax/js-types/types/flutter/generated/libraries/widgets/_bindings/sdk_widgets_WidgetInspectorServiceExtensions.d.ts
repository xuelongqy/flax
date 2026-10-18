import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetInspectorServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetInspectorServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/service_extensions.dart::WidgetInspectorServiceExtensions": readonly [];
}> {
    readonly __WidgetInspectorServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetInspectorServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const WidgetInspectorServiceExtensions: Readonly<{
    structuredErrors: WidgetInspectorServiceExtensions;
    show: WidgetInspectorServiceExtensions;
    trackRebuildDirtyWidgets: WidgetInspectorServiceExtensions;
    widgetLocationIdMap: WidgetInspectorServiceExtensions;
    trackRepaintWidgets: WidgetInspectorServiceExtensions;
    disposeAllGroups: WidgetInspectorServiceExtensions;
    disposeGroup: WidgetInspectorServiceExtensions;
    isWidgetTreeReady: WidgetInspectorServiceExtensions;
    disposeId: WidgetInspectorServiceExtensions;
    setPubRootDirectories: WidgetInspectorServiceExtensions;
    addPubRootDirectories: WidgetInspectorServiceExtensions;
    removePubRootDirectories: WidgetInspectorServiceExtensions;
    getPubRootDirectories: WidgetInspectorServiceExtensions;
    setSelectionById: WidgetInspectorServiceExtensions;
    getParentChain: WidgetInspectorServiceExtensions;
    getProperties: WidgetInspectorServiceExtensions;
    getChildren: WidgetInspectorServiceExtensions;
    getChildrenSummaryTree: WidgetInspectorServiceExtensions;
    getChildrenDetailsSubtree: WidgetInspectorServiceExtensions;
    getRootWidget: WidgetInspectorServiceExtensions;
    getRootWidgetTree: WidgetInspectorServiceExtensions;
    getRootWidgetSummaryTree: WidgetInspectorServiceExtensions;
    getRootWidgetSummaryTreeWithPreviews: WidgetInspectorServiceExtensions;
    getDetailsSubtree: WidgetInspectorServiceExtensions;
    getSelectedWidget: WidgetInspectorServiceExtensions;
    getSelectedSummaryWidget: WidgetInspectorServiceExtensions;
    isWidgetCreationTracked: WidgetInspectorServiceExtensions;
    screenshot: WidgetInspectorServiceExtensions;
    getLayoutExplorerNode: WidgetInspectorServiceExtensions;
    setFlexFit: WidgetInspectorServiceExtensions;
    setFlexFactor: WidgetInspectorServiceExtensions;
    setFlexProperties: WidgetInspectorServiceExtensions;
    values: readonly WidgetInspectorServiceExtensions[];
} & _FlaxInstanceType<WidgetInspectorServiceExtensions> & _FlaxDartType<WidgetInspectorServiceExtensions, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorServiceExtensions", readonly [], false]>>;
