// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionPoint';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [{"name":"endSelectionPoint","required":false,"positional":false},{"name":"hasContent","required":false,"positional":false},{"name":"selectionRects","required":false,"positional":false},{"name":"startSelectionPoint","required":false,"positional":false},{"name":"status","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionGeometry extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectionGeometry: unique symbol;
readonly [_flaxDartTypeValue]: SelectionGeometry;

}
defineObject("flax.core/sdk_rendering#type:SelectionGeometry", ["startSelectionPoint","endSelectionPoint","status","selectionRects","hasContent","hasSelection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionGeometry", "object", {"copyWith":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SelectionGeometryProxy = {type: "flax.core/sdk_rendering#type:SelectionGeometry", parameters: [{"name":"startSelectionPoint","required":false,"positional":false},{"name":"endSelectionPoint","required":false,"positional":false},{"name":"selectionRects","required":false,"positional":false},{"name":"status","required":true,"positional":false},{"name":"hasContent","required":true,"positional":false}], constructors: {"":[{"name":"startSelectionPoint","required":false,"positional":false},{"name":"endSelectionPoint","required":false,"positional":false},{"name":"selectionRects","required":false,"positional":false},{"name":"status","required":true,"positional":false},{"name":"hasContent","required":true,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"copyWith":_flaxMemberParameters0}, getters: ["startSelectionPoint","endSelectionPoint","status","selectionRects","hasContent","hasSelection"], setters: [], contextMembers: [], superMembers: ["get:startSelectionPoint","get:endSelectionPoint","get:status","get:selectionRects","get:hasContent","get:hasSelection","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface SelectionGeometry {
readonly [_flaxDartTypeValue]: SelectionGeometry;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | null | undefined; status?: upstream3.SelectionStatus | null | undefined; hasContent?: boolean | null | undefined}): SelectionGeometry;
get startSelectionPoint(): upstream1.SelectionPoint | null;
get endSelectionPoint(): upstream1.SelectionPoint | null;
get status(): upstream3.SelectionStatus;
get selectionRects(): DartList<upstream2.Rect>;
get hasContent(): boolean;
get hasSelection(): boolean;
}
export abstract class SelectionGeometry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectionGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false];
constructor(options: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean}) { super(_SelectionGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SelectionGeometry.prototype, _SelectionGeometryProxy);
export namespace SelectionGeometry { export function implement(args: [options: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean}], implementation: {}): SelectionGeometry {
return constructProxy(_SelectionGeometryProxy, args, implementation) as SelectionGeometry; } }
_flaxBindInstanceType<SelectionGeometry, typeof SelectionGeometry>(SelectionGeometry, "flax.core/sdk_rendering#type:SelectionGeometry", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "startSelectionPoint" | "endSelectionPoint" | "status" | "selectionRects" | "hasContent" | "hasSelection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
