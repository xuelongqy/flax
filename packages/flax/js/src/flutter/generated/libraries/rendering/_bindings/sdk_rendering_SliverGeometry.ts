// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters339, _flaxMemberParameters340, _flaxMemberParameters341, _flaxMemberParameters1, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverGeometry extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverGeometry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverGeometry: unique symbol;
readonly [_flaxDartTypeValue]: SliverGeometry;

}
defineObject("flax.core/sdk_rendering#type:SliverGeometry", ["scrollExtent","paintOrigin","paintExtent","layoutExtent","maxPaintExtent","maxScrollObstructionExtent","hitTestExtent","visible","hasVisualOverflow","scrollOffsetCorrection","cacheExtent","crossAxisExtent"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SliverGeometry", "object", {"copyWith":_flaxMemberParameters339,"debugAssertIsValid":_flaxMemberParameters340}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _SliverGeometryProxy = {type: "flax.core/sdk_rendering#type:SliverGeometry", parameters: _flaxMemberParameters341, constructors: {"": _flaxMemberParameters341}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters12,"copyWith":_flaxMemberParameters339,"debugAssertIsValid":_flaxMemberParameters340}, getters: ["scrollExtent","paintOrigin","paintExtent","layoutExtent","maxPaintExtent","maxScrollObstructionExtent","hitTestExtent","visible","hasVisualOverflow","scrollOffsetCorrection","cacheExtent","crossAxisExtent"], setters: [], contextMembers: [], superMembers: ["get:scrollExtent","get:paintOrigin","get:paintExtent","get:layoutExtent","get:maxPaintExtent","get:maxScrollObstructionExtent","get:hitTestExtent","get:visible","get:hasVisualOverflow","get:scrollOffsetCorrection","get:cacheExtent","get:crossAxisExtent","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith","debugAssertIsValid"]} as const;
export interface SliverGeometry {
readonly [_flaxDartTypeValue]: SliverGeometry;

toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {scrollExtent?: number | null | undefined; paintExtent?: number | null | undefined; paintOrigin?: number | null | undefined; layoutExtent?: number | null | undefined; maxPaintExtent?: number | null | undefined; maxScrollObstructionExtent?: number | null | undefined; crossAxisExtent?: number | null | undefined; hitTestExtent?: number | null | undefined; visible?: boolean | null | undefined; hasVisualOverflow?: boolean | null | undefined; cacheExtent?: number | null | undefined}): SliverGeometry;
debugAssertIsValid(options?: {informationCollector?: (() => DartIterableInput<upstream2.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) | null | undefined}): boolean;
get scrollExtent(): number;
get paintOrigin(): number;
get paintExtent(): number;
get layoutExtent(): number;
get maxPaintExtent(): number;
get maxScrollObstructionExtent(): number;
get hitTestExtent(): number;
get visible(): boolean;
get hasVisualOverflow(): boolean;
get scrollOffsetCorrection(): number | null;
get cacheExtent(): number;
get crossAxisExtent(): number | null;
}
export abstract class SliverGeometry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverGeometry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverGeometry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SliverGeometry", readonly [], false];
constructor(options?: {scrollExtent?: number | undefined; paintExtent?: number | undefined; paintOrigin?: number | undefined; layoutExtent?: number | null | undefined; maxPaintExtent?: number | undefined; maxScrollObstructionExtent?: number | undefined; crossAxisExtent?: number | null | undefined; hitTestExtent?: number | null | undefined; visible?: boolean | null | undefined; hasVisualOverflow?: boolean | undefined; scrollOffsetCorrection?: number | null | undefined; cacheExtent?: number | null | undefined}) { super(_SliverGeometryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SliverGeometry.prototype, _SliverGeometryProxy);
export namespace SliverGeometry { export function implement(args: [options?: {scrollExtent?: number | undefined; paintExtent?: number | undefined; paintOrigin?: number | undefined; layoutExtent?: number | null | undefined; maxPaintExtent?: number | undefined; maxScrollObstructionExtent?: number | undefined; crossAxisExtent?: number | null | undefined; hitTestExtent?: number | null | undefined; visible?: boolean | null | undefined; hasVisualOverflow?: boolean | undefined; scrollOffsetCorrection?: number | null | undefined; cacheExtent?: number | null | undefined}], implementation: {}): SliverGeometry {
return constructProxy(_SliverGeometryProxy, args, implementation) as SliverGeometry; } }
export namespace SliverGeometry { export declare const zero: SliverGeometry; }
_flaxDefineStaticGetters(SliverGeometry, "flax.core/sdk_rendering#read:SliverGeometry.", ["zero"]);
_flaxBindInstanceType<SliverGeometry, typeof SliverGeometry>(SliverGeometry, "flax.core/sdk_rendering#type:SliverGeometry", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "scrollExtent" | "paintOrigin" | "paintExtent" | "layoutExtent" | "maxPaintExtent" | "maxScrollObstructionExtent" | "hitTestExtent" | "visible" | "hasVisualOverflow" | "scrollOffsetCorrection" | "cacheExtent" | "crossAxisExtent" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "debugAssertIsValid" | "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverGeometry" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
