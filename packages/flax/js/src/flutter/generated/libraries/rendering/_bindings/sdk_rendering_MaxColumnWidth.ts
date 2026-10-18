// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
const _flaxMemberParameters0 = [{"name":"cells","required":true,"positional":true},{"name":"containerWidth","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"cells","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaxColumnWidth extends Omit<upstream0.TableColumnWidth, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::MaxColumnWidth": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> { readonly __MaxColumnWidth: unique symbol;
readonly [_flaxDartTypeValue]: MaxColumnWidth;

}
defineObject("flax.core/sdk_rendering#type:MaxColumnWidth", ["a","b"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:MaxColumnWidth", "object", {}, {}), [], undefined, "flax.core/sdk_rendering#type:TableColumnWidth");
const _MaxColumnWidthProxy = {type: "flax.core/sdk_rendering#type:MaxColumnWidth", parameters: [{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true}], constructors: {"":[{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true}]}, methods: {"minIntrinsicWidth":_flaxMemberParameters0,"maxIntrinsicWidth":_flaxMemberParameters0,"flex":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["a","b"], setters: [], contextMembers: [], superMembers: ["get:a","get:b","minIntrinsicWidth","maxIntrinsicWidth","flex","toString"]} as const;
export interface MaxColumnWidth {
readonly [_flaxDartTypeValue]: MaxColumnWidth;

minIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
maxIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
flex(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): number | null;
toString(): string;
get a(): upstream0.TableColumnWidth;
get b(): upstream0.TableColumnWidth;
}
export abstract class MaxColumnWidth extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaxColumnWidth>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MaxColumnWidth;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MaxColumnWidth", readonly [], false];
constructor(a: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }>) { super(_MaxColumnWidthProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MaxColumnWidth.prototype, _MaxColumnWidthProxy);
export namespace MaxColumnWidth { export function implement(args: [a: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }>, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }>], implementation: {}): MaxColumnWidth {
return constructProxy(_MaxColumnWidthProxy, args, implementation) as MaxColumnWidth; } }
_flaxBindInstanceType<MaxColumnWidth, typeof MaxColumnWidth>(MaxColumnWidth, "flax.core/sdk_rendering#type:MaxColumnWidth", ["flax.core/sdk_rendering#type:TableColumnWidth","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "b" | "minIntrinsicWidth" | "maxIntrinsicWidth" | "flex" | "toString" | "__flaxBound:package:flutter/src/rendering/table.dart::MaxColumnWidth" | "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth";
