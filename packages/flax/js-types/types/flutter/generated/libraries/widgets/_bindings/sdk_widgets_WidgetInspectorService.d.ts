import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetInspectorService extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::WidgetInspectorService": readonly [];
}> {
    readonly __WidgetInspectorService: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetInspectorService;
    readonly selection: upstream0.InspectorSelection;
    get selectionChangedCallback(): (() => void) | null;
    registerServiceExtension(options: {
        callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
        name: string;
        registerExtension: ((options: {
            callback: ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>);
            name: string;
        }) => void);
    }): void;
    forceRebuild(): Promise<void>;
    isStructuredErrorsEnabled(): boolean;
    initServiceExtensions(registerExtension: ((options: {
        callback: ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>);
        name: string;
    }) => void)): void;
    disposeGroup(name: string): void;
    toId(object: unknown | null, groupName: string): string | null;
    isWidgetTreeReady(groupName?: string | null): boolean;
    toObject(id: string | null, groupName?: string | null): unknown | null;
    toObjectForSourceLocation(id: string, groupName?: string | null): unknown | null;
    disposeId(id: string | null, groupName: string): void;
    setPubRootDirectories(pubRootDirectories: DartListInput<string, string>): void;
    addPubRootDirectories(pubRootDirectories: DartListInput<string, string>): void;
    removePubRootDirectories(pubRootDirectories: DartListInput<string, string>): void;
    setSelectionById(id: string | null, groupName?: string | null): boolean;
    setSelection(object: unknown | null, groupName?: string | null): boolean;
    getParentChain(id: string, groupName: string): string;
    getProperties(diagnosticsNodeId: string, groupName: string): string;
    getChildren(diagnosticsNodeId: string, groupName: string): string;
    getChildrenSummaryTree(diagnosticsNodeId: string, groupName: string): string;
    getChildrenDetailsSubtree(diagnosticableId: string, groupName: string): string;
    getRootWidget(groupName: string): string;
    getRootWidgetSummaryTree(groupName: string): string;
    getDetailsSubtree(diagnosticableId: string, groupName: string, options?: {
        subtreeDepth?: number | undefined;
    }): string;
    getSelectedWidget(previousSelectionId: string | null, groupName: string): string;
    screenshot(object: unknown | null, options: {
        debugPaint?: boolean | undefined;
        height: number;
        margin?: number | undefined;
        maxPixelRatio?: number | undefined;
        width: number;
    }): Promise<upstream1.Image | null>;
    getSelectedSummaryWidget(previousSelectionId: string | null, groupName: string): string;
    isWidgetCreationTracked(): boolean;
    postEvent(eventKind: string, eventData: DartMapInput<{}, unknown | null, {}, unknown | null>, options?: {
        stream?: string | undefined;
    }): void;
    inspect(object: unknown | null): void;
    performReassemble(): void;
    set selectionChangedCallback(value: (() => void) | null);
}
export declare namespace _WidgetInspectorServiceFactory {
    function setInstance(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::WidgetInspectorService": readonly [];
    }>): void;
}
export declare namespace _WidgetInspectorServiceFactory {
    const instance: WidgetInspectorService;
}
export declare const WidgetInspectorService: typeof _WidgetInspectorServiceFactory & _FlaxInstanceType<WidgetInspectorService> & _FlaxDartType<WidgetInspectorService, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorService", readonly [], false]>;
