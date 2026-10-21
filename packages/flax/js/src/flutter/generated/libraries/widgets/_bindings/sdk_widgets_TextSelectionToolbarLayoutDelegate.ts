// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SingleChildLayoutDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SingleChildLayoutDelegate';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { _flaxMemberParameters465, _flaxMemberParameters43, _flaxMemberParameters466, _flaxMemberParameters67, _flaxMemberParameters83 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }> { readonly __TextSelectionToolbarLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;

readonly anchorAbove: upstream1.Offset;
readonly anchorBelow: upstream1.Offset;
readonly fitsAbove: boolean | null;
getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", ["anchorAbove","anchorBelow","fitsAbove"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", "object", {"shouldRelayout":_flaxMemberParameters43}, {}), [], undefined, "flax.core/sdk_rendering#type:SingleChildLayoutDelegate");
export function _TextSelectionToolbarLayoutDelegateFactory(options: { anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined }): TextSelectionToolbarLayoutDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", "", [{"name":"anchorAbove","required":true},{"name":"anchorBelow","required":true},{"name":"fitsAbove"}], [], options) as TextSelectionToolbarLayoutDelegate;
}
const _TextSelectionToolbarLayoutDelegateProxy = {type: "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", parameters: _flaxMemberParameters466, constructors: {"": _flaxMemberParameters466}, methods: {"getSize":_flaxMemberParameters67,"getConstraintsForChild":_flaxMemberParameters67,"getPositionForChild":_flaxMemberParameters83,"shouldRelayout":_flaxMemberParameters43}, getters: ["anchorAbove","anchorBelow","fitsAbove"], setters: [], contextMembers: [], superMembers: ["get:anchorAbove","get:anchorBelow","get:fitsAbove","getSize","getConstraintsForChild","getPositionForChild","shouldRelayout"]} as const;
export interface _TextSelectionToolbarLayoutDelegateNative extends TextSelectionToolbarLayoutDelegate {
readonly [_flaxDartTypeValue]: _TextSelectionToolbarLayoutDelegateNative;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
get anchorAbove(): upstream1.Offset;
get anchorBelow(): upstream1.Offset;
get fitsAbove(): boolean | null;
}
export abstract class _TextSelectionToolbarLayoutDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false];
constructor(options: {anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined}) { super(_TextSelectionToolbarLayoutDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextSelectionToolbarLayoutDelegateNative.prototype, _TextSelectionToolbarLayoutDelegateProxy);
export namespace _TextSelectionToolbarLayoutDelegateFactory { export function implement(args: [options: {anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined}], implementation: {}): TextSelectionToolbarLayoutDelegate {
return constructProxy(_TextSelectionToolbarLayoutDelegateProxy, args, implementation) as TextSelectionToolbarLayoutDelegate; } }
const _TextSelectionToolbarLayoutDelegateBinding = _flaxProxyFactory(_TextSelectionToolbarLayoutDelegateFactory, _TextSelectionToolbarLayoutDelegateNative) as unknown as typeof _TextSelectionToolbarLayoutDelegateFactory & (new(options: {anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined}) => _TextSelectionToolbarLayoutDelegateNative);
export namespace _TextSelectionToolbarLayoutDelegateFactory { export function centerOn(position: number, width: number, max: number): number {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TextSelectionToolbarLayoutDelegate.centerOn", [position, width, max], _flaxMemberParameters465);
return _flaxResult as number;
} }
export const TextSelectionToolbarLayoutDelegate: typeof _TextSelectionToolbarLayoutDelegateBinding & _FlaxInstanceType<TextSelectionToolbarLayoutDelegate> & _FlaxDartType<TextSelectionToolbarLayoutDelegate, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false]> = _flaxBindInstanceType<TextSelectionToolbarLayoutDelegate, typeof _TextSelectionToolbarLayoutDelegateBinding>(_TextSelectionToolbarLayoutDelegateBinding, "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", ["flax.core/sdk_rendering#type:SingleChildLayoutDelegate","dart:core::Object"]) as typeof _TextSelectionToolbarLayoutDelegateBinding & _FlaxInstanceType<TextSelectionToolbarLayoutDelegate> & _FlaxDartType<TextSelectionToolbarLayoutDelegate, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchorAbove" | "anchorBelow" | "fitsAbove" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
