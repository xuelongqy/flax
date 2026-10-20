// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_Thumb';
import '@flax/material-ui/_bindings/material_Thumb';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/material-ui/_bindings/material_RangeValues';
import '@flax/material-ui/_bindings/material_RangeValues';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export type RangeThumbSelector = ((textDirection: upstream1.TextDirection, values: Readonly<{ "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeValues": readonly [] }>, tapValue: number, thumbSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, trackSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, dx: number) => upstream0.Thumb | null);
export type RangeThumbSelectorInput = ((textDirection: upstream1.TextDirection, values: upstream2.RangeValues, tapValue: number, thumbSize: upstream3.Size, trackSize: upstream3.Size, dx: number) => upstream0.Thumb | null);
