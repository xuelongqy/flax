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
import { _flaxMemberParameters326, _flaxMemberParameters327, _flaxMemberParameters1, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionGeometry extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectionGeometry: unique symbol;
readonly [_flaxDartTypeValue]: SelectionGeometry;

readonly startSelectionPoint: upstream1.SelectionPoint | null;
readonly endSelectionPoint: upstream1.SelectionPoint | null;
readonly status: upstream3.SelectionStatus;
readonly selectionRects: DartList<upstream2.Rect>;
readonly hasContent: boolean;
readonly hasSelection: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; hasContent?: boolean | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | null | undefined; startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; status?: upstream3.SelectionStatus | null | undefined}): SelectionGeometry;
}
defineObject("flax.core/sdk_rendering#type:SelectionGeometry", ["startSelectionPoint","endSelectionPoint","status","selectionRects","hasContent","hasSelection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionGeometry", "object", {"copyWith":_flaxMemberParameters326}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SelectionGeometryFactory(options: { startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean }): SelectionGeometry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectionGeometry", "", [{"name":"startSelectionPoint"},{"name":"endSelectionPoint"},{"name":"selectionRects"},{"name":"status","required":true},{"name":"hasContent","required":true}], [], options) as SelectionGeometry;
}
const _SelectionGeometryProxy = {type: "flax.core/sdk_rendering#type:SelectionGeometry", parameters: _flaxMemberParameters327, constructors: {"": _flaxMemberParameters327}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters12,"copyWith":_flaxMemberParameters326}, getters: ["startSelectionPoint","endSelectionPoint","status","selectionRects","hasContent","hasSelection"], setters: [], contextMembers: [], superMembers: ["get:startSelectionPoint","get:endSelectionPoint","get:status","get:selectionRects","get:hasContent","get:hasSelection","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith"]} as const;
export interface _SelectionGeometryNative extends SelectionGeometry {
readonly [_flaxDartTypeValue]: _SelectionGeometryNative;

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
export abstract class _SelectionGeometryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectionGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false];
constructor(options: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean}) { super(_SelectionGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectionGeometryNative.prototype, _SelectionGeometryProxy);
export namespace _SelectionGeometryFactory { export function implement(args: [options: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean}], implementation: {}): SelectionGeometry {
return constructProxy(_SelectionGeometryProxy, args, implementation) as SelectionGeometry; } }
const _SelectionGeometryBinding = _flaxProxyFactory(_SelectionGeometryFactory, _SelectionGeometryNative) as unknown as typeof _SelectionGeometryFactory & (new(options: {startSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; endSelectionPoint?: Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; selectionRects?: DartListInput<upstream2.Rect, Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>> | undefined; status: upstream3.SelectionStatus; hasContent: boolean}) => _SelectionGeometryNative);
export const SelectionGeometry: typeof _SelectionGeometryBinding & _FlaxInstanceType<SelectionGeometry> & _FlaxDartType<SelectionGeometry, readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false]> = _flaxBindInstanceType<SelectionGeometry, typeof _SelectionGeometryBinding>(_SelectionGeometryBinding, "flax.core/sdk_rendering#type:SelectionGeometry", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SelectionGeometryBinding & _FlaxInstanceType<SelectionGeometry> & _FlaxDartType<SelectionGeometry, readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "startSelectionPoint" | "endSelectionPoint" | "status" | "selectionRects" | "hasContent" | "hasSelection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
