// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayChildLayoutInfo {
readonly childPaintTransform: upstream0.Matrix4;
readonly childSize: upstream1.Size;
readonly overlaySize: upstream1.Size;
}
const _flaxExtension_OverlayChildLayoutInfo_prototype = {
get childPaintTransform(): upstream0.Matrix4 {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childPaintTransform");
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childPaintTransform", [receiver]);
return _flaxResult as upstream0.Matrix4;
},
get childSize(): upstream1.Size {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childPaintTransform");
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childSize", [receiver]);
return _flaxResult as upstream1.Size;
},
get overlaySize(): upstream1.Size {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const receiver = _flaxExtensionReceiver(this, "flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childPaintTransform");
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.overlaySize", [receiver]);
return _flaxResult as upstream1.Size;
},
};
const _flaxExtension_OverlayChildLayoutInfo_statics = {
};
const _flaxExtension_OverlayChildLayoutInfo_create = {create(receiver: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>; readonly $3: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): OverlayChildLayoutInfo {
if (arguments.length !== 1 || receiver === undefined) throw new TypeError('Expected one extension receiver');
const view = Object.create(_flaxExtension_OverlayChildLayoutInfo_prototype);
_flaxBindDartExtension(view, "flax.core/sdk_widgets#function:OverlayChildLayoutInfo.getter.childPaintTransform", receiver, {});
return view;
}}.create; export const OverlayChildLayoutInfo: {view: (receiver: { readonly $1: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; readonly $2: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }>; readonly $3: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }) => OverlayChildLayoutInfo;
} = Object.defineProperties({view: _flaxExtension_OverlayChildLayoutInfo_create}, Object.getOwnPropertyDescriptors(_flaxExtension_OverlayChildLayoutInfo_statics)) as typeof OverlayChildLayoutInfo;
