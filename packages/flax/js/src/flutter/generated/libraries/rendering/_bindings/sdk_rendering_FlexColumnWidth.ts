// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
const _flaxMemberParameters0 = [{"name":"cells","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"value","positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"cells","required":true,"positional":true},{"name":"containerWidth","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlexColumnWidth extends Omit<upstream0.TableColumnWidth, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::FlexColumnWidth": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [] }> { readonly __FlexColumnWidth: unique symbol;
readonly [_flaxDartTypeValue]: FlexColumnWidth;

}
defineObject("flax.core/sdk_rendering#type:FlexColumnWidth", ["value"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:FlexColumnWidth", "object", {"flex":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_rendering#type:TableColumnWidth");
const _FlexColumnWidthProxy = {type: "flax.core/sdk_rendering#type:FlexColumnWidth", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"minIntrinsicWidth":_flaxMemberParameters2,"maxIntrinsicWidth":_flaxMemberParameters2,"flex":_flaxMemberParameters0,"toString":_flaxMemberParameters3}, getters: ["value"], setters: [], contextMembers: [], superMembers: ["get:value","minIntrinsicWidth","maxIntrinsicWidth","flex","toString"]} as const;
export interface FlexColumnWidth {
readonly [_flaxDartTypeValue]: FlexColumnWidth;

minIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
maxIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>, containerWidth: number): number;
flex(cells: DartIterableInput<upstream1.RenderBox, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): number;
toString(): string;
get value(): number;
}
export abstract class FlexColumnWidth extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlexColumnWidth>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FlexColumnWidth;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FlexColumnWidth", readonly [], false];
constructor(value?: number) { super(_FlexColumnWidthProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(FlexColumnWidth.prototype, _FlexColumnWidthProxy);
export namespace FlexColumnWidth { export function implement(args: [value?: number], implementation: {}): FlexColumnWidth {
return constructProxy(_FlexColumnWidthProxy, args, implementation) as FlexColumnWidth; } }
_flaxBindInstanceType<FlexColumnWidth, typeof FlexColumnWidth>(FlexColumnWidth, "flax.core/sdk_rendering#type:FlexColumnWidth", ["flax.core/sdk_rendering#type:TableColumnWidth","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "minIntrinsicWidth" | "maxIntrinsicWidth" | "flex" | "toString" | "__flaxBound:package:flutter/src/rendering/table.dart::FlexColumnWidth" | "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth";
