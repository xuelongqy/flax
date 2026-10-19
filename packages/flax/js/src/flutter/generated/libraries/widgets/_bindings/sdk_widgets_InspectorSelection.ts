// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface InspectorSelection extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorSelection": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __InspectorSelection: unique symbol;
readonly [_flaxDartTypeValue]: InspectorSelection;

}
defineObject("flax.core/sdk_widgets#type:InspectorSelection", ["hasListeners","candidates","index","current","currentElement","active"], ["candidates","index","current","currentElement"], _flaxBindingMethods("flax.core/sdk_widgets#type:InspectorSelection", "object", {"clear":_flaxMemberParameters2,"clearCandidates":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _InspectorSelectionProxy = {type: "flax.core/sdk_widgets#type:InspectorSelection", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"clear":_flaxMemberParameters2,"clearCandidates":_flaxMemberParameters2}, getters: ["candidates","index","current","currentElement","active","hasListeners"], setters: ["candidates","index","current","currentElement"], contextMembers: [], superMembers: ["get:candidates","get:index","get:current","get:currentElement","get:active","get:hasListeners","set:candidates","set:index","set:current","set:currentElement","addListener","removeListener","dispose","clear","clearCandidates"]} as const;
export interface InspectorSelection {
readonly [_flaxDartTypeValue]: InspectorSelection;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
clear(): void;
clearCandidates(): void;
get candidates(): DartList<upstream2.RenderObject>;
get index(): number;
get current(): upstream2.RenderObject | null;
get currentElement(): upstream3.Element | null;
get active(): boolean;
get hasListeners(): boolean;
set candidates(value: DartListInput<upstream2.RenderObject, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>);
set index(value: number);
set current(value: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null);
set currentElement(value: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }> | null);
}
export abstract class InspectorSelection extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InspectorSelection>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: InspectorSelection;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:InspectorSelection", readonly [], false];
constructor() { super(_InspectorSelectionProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(InspectorSelection.prototype, _InspectorSelectionProxy);
export namespace InspectorSelection { export function implement(args: [], implementation: {}): InspectorSelection {
return constructProxy(_InspectorSelectionProxy, args, implementation) as InspectorSelection; } }
_flaxBindInstanceType<InspectorSelection, typeof InspectorSelection>(InspectorSelection, "flax.core/sdk_widgets#type:InspectorSelection", ["dart:core::Object","flax.core/sdk_foundation#type:ChangeNotifier","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "candidates" | "index" | "current" | "currentElement" | "active" | "addListener" | "removeListener" | "dispose" | "clear" | "clearCandidates" | "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorSelection" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
