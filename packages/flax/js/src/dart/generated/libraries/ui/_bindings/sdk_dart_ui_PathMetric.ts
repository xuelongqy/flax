// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Tangent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Tangent';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
const _flaxMemberParameters0 = [{"name":"distance","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"startWithMoveTo"}] as const;
const _flaxMemberParameters2 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PathMetric extends Readonly<{ "__flaxBound:dart:ui::PathMetric": readonly [] }> { readonly __PathMetric: unique symbol;
readonly [_flaxDartTypeValue]: PathMetric;

readonly length: number;
readonly isClosed: boolean;
readonly contourIndex: number;
getTangentForOffset(distance: number): upstream0.Tangent | null;
extractPath(start: number, end: number, options?: {startWithMoveTo?: boolean | undefined}): upstream1.Path;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:PathMetric", ["length","isClosed","contourIndex"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PathMetric", "object", {"getTangentForOffset":_flaxMemberParameters0,"extractPath":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), []);
export const PathMetric: object & _FlaxInstanceType<PathMetric> & _FlaxDartType<PathMetric, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetric", readonly [], false]> = _flaxBindInstanceType<PathMetric, object>({}, "flax.core/sdk_dart_ui#type:PathMetric", ["dart:core::Object"]) as object & _FlaxInstanceType<PathMetric> & _FlaxDartType<PathMetric, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetric", readonly [], false]>;
