// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters412 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionToolbarAnchors extends Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> { readonly __TextSelectionToolbarAnchors: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionToolbarAnchors;

readonly primaryAnchor: upstream0.Offset;
readonly secondaryAnchor: upstream0.Offset | null;
}
defineObject("flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", ["primaryAnchor","secondaryAnchor"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", "object", {}, {}), []);
export function _TextSelectionToolbarAnchorsFactory(options: { primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined }): TextSelectionToolbarAnchors {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", "", [{"name":"primaryAnchor","required":true},{"name":"secondaryAnchor"}], [], options) as TextSelectionToolbarAnchors;
}
export namespace _TextSelectionToolbarAnchorsFactory {
export function fromSelection(options: { renderBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>; startGlyphHeight: number; endGlyphHeight: number; selectionEndpoints: DartListInput<upstream2.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>> }): TextSelectionToolbarAnchors {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", "fromSelection", [{"name":"renderBox","required":true},{"name":"startGlyphHeight","required":true},{"name":"endGlyphHeight","required":true},{"name":"selectionEndpoints","required":true}], [], options) as TextSelectionToolbarAnchors;
}
}
const _TextSelectionToolbarAnchorsProxy = {type: "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", parameters: _flaxMemberParameters412, constructors: {"": _flaxMemberParameters412}, methods: {}, getters: ["primaryAnchor","secondaryAnchor"], setters: [], contextMembers: [], superMembers: ["get:primaryAnchor","get:secondaryAnchor"]} as const;
export interface _TextSelectionToolbarAnchorsNative extends TextSelectionToolbarAnchors {
readonly [_flaxDartTypeValue]: _TextSelectionToolbarAnchorsNative;

get primaryAnchor(): upstream0.Offset;
get secondaryAnchor(): upstream0.Offset | null;
}
export abstract class _TextSelectionToolbarAnchorsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarAnchors>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionToolbarAnchors;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false];
constructor(options: {primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_TextSelectionToolbarAnchorsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextSelectionToolbarAnchorsNative.prototype, _TextSelectionToolbarAnchorsProxy);
export namespace _TextSelectionToolbarAnchorsFactory { export function implement(args: [options: {primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): TextSelectionToolbarAnchors {
return constructProxy(_TextSelectionToolbarAnchorsProxy, args, implementation) as TextSelectionToolbarAnchors; } }
const _TextSelectionToolbarAnchorsBinding = _flaxProxyFactory(_TextSelectionToolbarAnchorsFactory, _TextSelectionToolbarAnchorsNative) as unknown as typeof _TextSelectionToolbarAnchorsFactory & (new(options: {primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) => _TextSelectionToolbarAnchorsNative);
export namespace _TextSelectionToolbarAnchorsFactory { export function getSelectionRect(renderBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, startGlyphHeight: number, endGlyphHeight: number, selectionEndpoints: DartListInput<upstream2.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>>): upstream3.Rect {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TextSelectionToolbarAnchors.getSelectionRect", [renderBox, startGlyphHeight, endGlyphHeight, selectionEndpoints]);
return _flaxResult as upstream3.Rect;
} }
export const TextSelectionToolbarAnchors: typeof _TextSelectionToolbarAnchorsBinding & _FlaxInstanceType<TextSelectionToolbarAnchors> & _FlaxDartType<TextSelectionToolbarAnchors, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false]> = _flaxBindInstanceType<TextSelectionToolbarAnchors, typeof _TextSelectionToolbarAnchorsBinding>(_TextSelectionToolbarAnchorsBinding, "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", ["dart:core::Object"]) as typeof _TextSelectionToolbarAnchorsBinding & _FlaxInstanceType<TextSelectionToolbarAnchors> & _FlaxDartType<TextSelectionToolbarAnchors, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false]>;
