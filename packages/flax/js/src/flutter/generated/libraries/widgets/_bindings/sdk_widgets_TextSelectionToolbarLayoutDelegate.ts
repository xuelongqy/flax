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
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"anchorAbove","required":true},{"name":"anchorBelow","required":true},{"name":"fitsAbove"}] as const;
const _flaxMemberParameters2 = [{"name":"constraints","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"size","required":true,"positional":true},{"name":"childSize","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }> { readonly __TextSelectionToolbarLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;

}
defineObject("flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", ["anchorAbove","anchorBelow","fitsAbove"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", "object", {"shouldRelayout":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_rendering#type:SingleChildLayoutDelegate");
const _TextSelectionToolbarLayoutDelegateProxy = {type: "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"getSize":_flaxMemberParameters2,"getConstraintsForChild":_flaxMemberParameters2,"getPositionForChild":_flaxMemberParameters3,"shouldRelayout":_flaxMemberParameters0}, getters: ["anchorAbove","anchorBelow","fitsAbove"], setters: [], contextMembers: [], superMembers: ["get:anchorAbove","get:anchorBelow","get:fitsAbove","getSize","getConstraintsForChild","getPositionForChild","shouldRelayout"]} as const;
export interface TextSelectionToolbarLayoutDelegate {
readonly [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
get anchorAbove(): upstream1.Offset;
get anchorBelow(): upstream1.Offset;
get fitsAbove(): boolean | null;
}
export abstract class TextSelectionToolbarLayoutDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false];
constructor(options: {anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined}) { super(_TextSelectionToolbarLayoutDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextSelectionToolbarLayoutDelegate.prototype, _TextSelectionToolbarLayoutDelegateProxy);
export namespace TextSelectionToolbarLayoutDelegate { export function implement(args: [options: {anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; fitsAbove?: boolean | null | undefined}], implementation: {}): TextSelectionToolbarLayoutDelegate {
return constructProxy(_TextSelectionToolbarLayoutDelegateProxy, args, implementation) as TextSelectionToolbarLayoutDelegate; } }
export namespace TextSelectionToolbarLayoutDelegate { export function centerOn(position: number, width: number, max: number): number {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:TextSelectionToolbarLayoutDelegate.centerOn", [position, width, max]);
return _flaxResult as number;
} }
_flaxBindInstanceType<TextSelectionToolbarLayoutDelegate, typeof TextSelectionToolbarLayoutDelegate>(TextSelectionToolbarLayoutDelegate, "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", ["flax.core/sdk_rendering#type:SingleChildLayoutDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchorAbove" | "anchorBelow" | "fitsAbove" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
