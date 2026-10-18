// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusManager';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusManager';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
const _flaxMemberParameters0 = [{"name":"element","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"callback","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true},{"name":"callback","required":false,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"root","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BuildOwner extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildOwner": readonly [] }> { readonly __BuildOwner: unique symbol;
readonly [_flaxDartTypeValue]: BuildOwner;

}
defineObject("flax.core/sdk_widgets#type:BuildOwner", ["onBuildScheduled","focusManager","debugBuilding","globalKeyCount"], ["onBuildScheduled","focusManager"], _flaxBindingMethods("flax.core/sdk_widgets#type:BuildOwner", "object", {"scheduleBuildFor":_flaxMemberParameters0,"lockState":_flaxMemberParameters1,"buildScope":_flaxMemberParameters2,"finalizeTree":_flaxMemberParameters3,"reassemble":_flaxMemberParameters4}, {}), []);
const _BuildOwnerProxy = {type: "flax.core/sdk_widgets#type:BuildOwner", parameters: [{"name":"onBuildScheduled","required":false,"positional":false},{"name":"focusManager","required":false,"positional":false}], constructors: {"":[{"name":"onBuildScheduled","required":false,"positional":false},{"name":"focusManager","required":false,"positional":false}]}, methods: {"scheduleBuildFor":_flaxMemberParameters0,"lockState":_flaxMemberParameters1,"buildScope":_flaxMemberParameters2,"finalizeTree":_flaxMemberParameters3,"reassemble":_flaxMemberParameters4}, getters: ["onBuildScheduled","focusManager","debugBuilding","globalKeyCount"], setters: ["onBuildScheduled","focusManager"], contextMembers: [], superMembers: ["get:onBuildScheduled","get:focusManager","get:debugBuilding","get:globalKeyCount","set:onBuildScheduled","set:focusManager","scheduleBuildFor","lockState","buildScope","finalizeTree","reassemble"]} as const;
export interface BuildOwner {
readonly [_flaxDartTypeValue]: BuildOwner;

scheduleBuildFor(element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): void;
lockState(callback: (() => void)): void;
buildScope(context: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>, callback?: (() => void) | null): void;
finalizeTree(): void;
reassemble(root: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): void;
get onBuildScheduled(): (() => void) | null;
get focusManager(): upstream0.FocusManager;
get debugBuilding(): boolean;
get globalKeyCount(): number;
set onBuildScheduled(value: (() => void) | null);
set focusManager(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>);
}
export abstract class BuildOwner extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BuildOwner>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BuildOwner;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BuildOwner", readonly [], false];
constructor(options?: {onBuildScheduled?: (() => void) | null | undefined; focusManager?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_BuildOwnerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(BuildOwner.prototype, _BuildOwnerProxy);
export namespace BuildOwner { export function implement(args: [options?: {onBuildScheduled?: (() => void) | null | undefined; focusManager?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {}): BuildOwner {
return constructProxy(_BuildOwnerProxy, args, implementation) as BuildOwner; } }
_flaxBindInstanceType<BuildOwner, typeof BuildOwner>(BuildOwner, "flax.core/sdk_widgets#type:BuildOwner", ["dart:core::Object"]);
