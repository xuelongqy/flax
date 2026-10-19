// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import { _flaxMemberParameters426 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionToolbarAnchors extends Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [] }> { readonly __TextSelectionToolbarAnchors: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionToolbarAnchors;

}
defineObject("flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", ["primaryAnchor","secondaryAnchor"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", "object", {}, {}), []);
const _TextSelectionToolbarAnchorsProxy = {type: "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", parameters: _flaxMemberParameters426, constructors: {"": _flaxMemberParameters426}, methods: {}, getters: ["primaryAnchor","secondaryAnchor"], setters: [], contextMembers: [], superMembers: ["get:primaryAnchor","get:secondaryAnchor"]} as const;
export interface TextSelectionToolbarAnchors {
readonly [_flaxDartTypeValue]: TextSelectionToolbarAnchors;

get primaryAnchor(): upstream0.Offset;
get secondaryAnchor(): upstream0.Offset | null;
}
export abstract class TextSelectionToolbarAnchors extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarAnchors>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionToolbarAnchors;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false];
constructor(options: {primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}) { super(_TextSelectionToolbarAnchorsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextSelectionToolbarAnchors.prototype, _TextSelectionToolbarAnchorsProxy);
export namespace TextSelectionToolbarAnchors { export function implement(args: [options: {primaryAnchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; secondaryAnchor?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}], implementation: {}): TextSelectionToolbarAnchors {
return constructProxy(_TextSelectionToolbarAnchorsProxy, args, implementation) as TextSelectionToolbarAnchors; } }
export namespace TextSelectionToolbarAnchors { export function getSelectionRect(renderBox: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, startGlyphHeight: number, endGlyphHeight: number, selectionEndpoints: DartListInput<upstream3.TextSelectionPoint, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }>>): upstream1.Rect {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TextSelectionToolbarAnchors.getSelectionRect", [renderBox, startGlyphHeight, endGlyphHeight, selectionEndpoints]);
return _flaxResult as upstream1.Rect;
} }
_flaxBindInstanceType<TextSelectionToolbarAnchors, typeof TextSelectionToolbarAnchors>(TextSelectionToolbarAnchors, "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", ["dart:core::Object"]);
