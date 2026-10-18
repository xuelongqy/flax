// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PathMetricIterator extends Omit<upstream0.Iterator<upstream1.PathMetric>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:ui::PathMetricIterator": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Iterator": readonly [upstream1.PathMetric] }> { readonly __PathMetricIterator: unique symbol;
readonly [_flaxDartTypeValue]: PathMetricIterator;

readonly current: upstream1.PathMetric;
moveNext(): boolean;
}
defineObject("flax.core/sdk_dart_ui#type:PathMetricIterator", ["current"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PathMetricIterator", "object", {"moveNext":_flaxMemberParameters0}, {}), []);
export const PathMetricIterator: object & _FlaxInstanceType<PathMetricIterator> & _FlaxDartType<PathMetricIterator, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetricIterator", readonly [], false]> = _flaxBindInstanceType<PathMetricIterator, object>({}, "flax.core/sdk_dart_ui#type:PathMetricIterator", ["dart:core::Object","flax.core/flutter#type:Iterator"]) as object & _FlaxInstanceType<PathMetricIterator> & _FlaxDartType<PathMetricIterator, readonly ["class", "flax.core/sdk_dart_ui#type:PathMetricIterator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "moveNext" | "__flaxBound:dart:ui::PathMetricIterator" | "__flaxBound:dart:core::Iterator";
