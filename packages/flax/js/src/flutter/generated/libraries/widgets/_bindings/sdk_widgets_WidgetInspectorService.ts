// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InspectorSelection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
const _flaxMemberParameters0 = [{"name":"callback","required":true},{"name":"name","required":true},{"name":"registerExtension","required":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"registerExtension","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"object","required":true,"positional":true},{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"groupName","positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"id","required":true,"positional":true},{"name":"groupName","positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"id","required":true,"positional":true},{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters8 = [{"name":"pubRootDirectories","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"object","required":true,"positional":true},{"name":"groupName","positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"diagnosticsNodeId","required":true,"positional":true},{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"diagnosticableId","required":true,"positional":true},{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"diagnosticableId","required":true,"positional":true},{"name":"groupName","required":true,"positional":true},{"name":"subtreeDepth"}] as const;
const _flaxMemberParameters14 = [{"name":"previousSelectionId","required":true,"positional":true},{"name":"groupName","required":true,"positional":true}] as const;
const _flaxMemberParameters15 = [{"name":"object","required":true,"positional":true},{"name":"debugPaint"},{"name":"height","required":true},{"name":"margin"},{"name":"maxPixelRatio"},{"name":"width","required":true}] as const;
const _flaxMemberParameters16 = [{"name":"eventKind","required":true,"positional":true},{"name":"eventData","required":true,"positional":true},{"name":"stream"}] as const;
const _flaxMemberParameters17 = [{"name":"object","required":true,"positional":true}] as const;
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
defineObject("flax.core/sdk_widgets#type:WidgetInspectorService", ["selection","selectionChangedCallback"], ["selectionChangedCallback"], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetInspectorService", "object", {"registerServiceExtension":_flaxMemberParameters0,"forceRebuild":_flaxMemberParameters1,"isStructuredErrorsEnabled":_flaxMemberParameters1,"initServiceExtensions":_flaxMemberParameters2,"disposeGroup":_flaxMemberParameters3,"toId":_flaxMemberParameters4,"isWidgetTreeReady":_flaxMemberParameters5,"toObject":_flaxMemberParameters6,"toObjectForSourceLocation":_flaxMemberParameters6,"disposeId":_flaxMemberParameters7,"setPubRootDirectories":_flaxMemberParameters8,"addPubRootDirectories":_flaxMemberParameters8,"removePubRootDirectories":_flaxMemberParameters8,"setSelectionById":_flaxMemberParameters6,"setSelection":_flaxMemberParameters9,"getParentChain":_flaxMemberParameters7,"getProperties":_flaxMemberParameters10,"getChildren":_flaxMemberParameters10,"getChildrenSummaryTree":_flaxMemberParameters10,"getChildrenDetailsSubtree":_flaxMemberParameters11,"getRootWidget":_flaxMemberParameters12,"getRootWidgetSummaryTree":_flaxMemberParameters12,"getDetailsSubtree":_flaxMemberParameters13,"getSelectedWidget":_flaxMemberParameters14,"screenshot":_flaxMemberParameters15,"getSelectedSummaryWidget":_flaxMemberParameters14,"isWidgetCreationTracked":_flaxMemberParameters1,"postEvent":_flaxMemberParameters16,"inspect":_flaxMemberParameters17,"performReassemble":_flaxMemberParameters1}, {}), []);
export namespace _WidgetInspectorServiceFactory { export function setInstance(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::WidgetInspectorService": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:WidgetInspectorService.instance%3D", [value]);
} }
export namespace _WidgetInspectorServiceFactory { export declare const instance: WidgetInspectorService; }
_flaxDefineStaticGetters(_WidgetInspectorServiceFactory, "flax.core/sdk_widgets#read:WidgetInspectorService.", ["instance"]);
export const WidgetInspectorService: typeof _WidgetInspectorServiceFactory & _FlaxInstanceType<WidgetInspectorService> & _FlaxDartType<WidgetInspectorService, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorService", readonly [], false]> = _flaxBindInstanceType<WidgetInspectorService, typeof _WidgetInspectorServiceFactory>(_WidgetInspectorServiceFactory, "flax.core/sdk_widgets#type:WidgetInspectorService", ["dart:core::Object"]) as typeof _WidgetInspectorServiceFactory & _FlaxInstanceType<WidgetInspectorService> & _FlaxDartType<WidgetInspectorService, readonly ["class", "flax.core/sdk_widgets#type:WidgetInspectorService", readonly [], false]>;
