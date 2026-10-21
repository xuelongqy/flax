// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { _flaxMemberParameters38, _flaxMemberParameters491, _flaxMemberParameters2, _flaxMemberParameters492, _flaxMemberParameters133, _flaxMemberParameters493, _flaxMemberParameters494, _flaxMemberParameters495, _flaxMemberParameters496, _flaxMemberParameters497, _flaxMemberParameters498, _flaxMemberParameters499, _flaxMemberParameters500, _flaxMemberParameters501, _flaxMemberParameters502, _flaxMemberParameters503, _flaxMemberParameters504, _flaxMemberParameters505, _flaxMemberParameters506 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetInspectorService extends Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::WidgetInspectorService": readonly [] }> { readonly __WidgetInspectorService: unique symbol;
readonly [_flaxDartTypeValue]: WidgetInspectorService;

readonly selection: upstream0.InspectorSelection;
get selectionChangedCallback(): (() => void) | null;
registerServiceExtension(options: {callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>); name: string; registerExtension: ((options: { callback: ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>); name: string }) => void)}): void;
forceRebuild(): Promise<void>;
isStructuredErrorsEnabled(): boolean;
initServiceExtensions(registerExtension: ((options: { callback: ((parameters: DartMapInput<string, string, string, string>) => Promise<DartMap<string, unknown | null>>); name: string }) => void)): void;
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
getDetailsSubtree(diagnosticableId: string, groupName: string, options?: {subtreeDepth?: number | undefined}): string;
getSelectedWidget(previousSelectionId: string | null, groupName: string): string;
screenshot(object: unknown | null, options: {debugPaint?: boolean | undefined; height: number; margin?: number | undefined; maxPixelRatio?: number | undefined; width: number}): Promise<upstream1.Image | null>;
getSelectedSummaryWidget(previousSelectionId: string | null, groupName: string): string;
isWidgetCreationTracked(): boolean;
postEvent(eventKind: string, eventData: DartMapInput<{}, unknown | null, {}, unknown | null>, options?: {stream?: string | undefined}): void;
inspect(object: unknown | null): void;
performReassemble(): void;
set selectionChangedCallback(value: (() => void) | null);
}
defineObject("flax.core/sdk_widgets#type:WidgetInspectorService", ["selection","selectionChangedCallback"], ["selectionChangedCallback"], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetInspectorService", "object", {"registerServiceExtension":_flaxMemberParameters491,"forceRebuild":_flaxMemberParameters2,"isStructuredErrorsEnabled":_flaxMemberParameters2,"initServiceExtensions":_flaxMemberParameters492,"disposeGroup":_flaxMemberParameters133,"toId":_flaxMemberParameters493,"isWidgetTreeReady":_flaxMemberParameters494,"toObject":_flaxMemberParameters495,"toObjectForSourceLocation":_flaxMemberParameters495,"disposeId":_flaxMemberParameters496,"setPubRootDirectories":_flaxMemberParameters497,"addPubRootDirectories":_flaxMemberParameters497,"removePubRootDirectories":_flaxMemberParameters497,"setSelectionById":_flaxMemberParameters495,"setSelection":_flaxMemberParameters498,"getParentChain":_flaxMemberParameters496,"getProperties":_flaxMemberParameters499,"getChildren":_flaxMemberParameters499,"getChildrenSummaryTree":_flaxMemberParameters499,"getChildrenDetailsSubtree":_flaxMemberParameters500,"getRootWidget":_flaxMemberParameters501,"getRootWidgetSummaryTree":_flaxMemberParameters501,"getDetailsSubtree":_flaxMemberParameters502,"getSelectedWidget":_flaxMemberParameters503,"screenshot":_flaxMemberParameters504,"getSelectedSummaryWidget":_flaxMemberParameters503,"isWidgetCreationTracked":_flaxMemberParameters2,"postEvent":_flaxMemberParameters505,"inspect":_flaxMemberParameters506,"performReassemble":_flaxMemberParameters2}, {}), []);
export namespace _WidgetInspectorServiceFactory { export function setInstance(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::WidgetInspectorService": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetInspectorService.instance%3D", [value], _flaxMemberParameters38);
} }
export namespace _WidgetInspectorServiceFactory { export declare const instance: WidgetInspectorService; }
_flaxDefineStaticGetters(_WidgetInspectorServiceFactory, "flax.core/sdk_widgets#read:WidgetInspectorService.", ["instance"]);
export const WidgetInspectorService: typeof _WidgetInspectorServiceFactory & _FlaxInstanceType<WidgetInspectorService> & _FlaxDartType<WidgetInspectorService, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorService", readonly [], false]> = _flaxBindInstanceType<WidgetInspectorService, typeof _WidgetInspectorServiceFactory>(_WidgetInspectorServiceFactory, "flax.core/sdk_widgets#type:WidgetInspectorService", ["dart:core::Object"]) as typeof _WidgetInspectorServiceFactory & _FlaxInstanceType<WidgetInspectorService> & _FlaxDartType<WidgetInspectorService, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorService", readonly [], false]>;
