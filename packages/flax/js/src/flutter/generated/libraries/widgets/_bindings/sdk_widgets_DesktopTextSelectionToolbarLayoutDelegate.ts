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
import { _flaxMemberParameters38, _flaxMemberParameters93, _flaxMemberParameters94, _flaxMemberParameters95 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DesktopTextSelectionToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }> { readonly __DesktopTextSelectionToolbarLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: DesktopTextSelectionToolbarLayoutDelegate;

}
defineObject("flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", ["anchor"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", "object", {"shouldRelayout":_flaxMemberParameters38}, {}), [], undefined, "flax.core/sdk_rendering#type:SingleChildLayoutDelegate");
const _DesktopTextSelectionToolbarLayoutDelegateProxy = {type: "flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", parameters: _flaxMemberParameters93, constructors: {"": _flaxMemberParameters93}, methods: {"getSize":_flaxMemberParameters94,"getConstraintsForChild":_flaxMemberParameters94,"getPositionForChild":_flaxMemberParameters95,"shouldRelayout":_flaxMemberParameters38}, getters: ["anchor"], setters: [], contextMembers: [], superMembers: ["get:anchor","getSize","getConstraintsForChild","getPositionForChild","shouldRelayout"]} as const;
export interface DesktopTextSelectionToolbarLayoutDelegate {
readonly [_flaxDartTypeValue]: DesktopTextSelectionToolbarLayoutDelegate;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
get anchor(): upstream1.Offset;
}
export abstract class DesktopTextSelectionToolbarLayoutDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DesktopTextSelectionToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DesktopTextSelectionToolbarLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", readonly [], false];
constructor(options: {anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_DesktopTextSelectionToolbarLayoutDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DesktopTextSelectionToolbarLayoutDelegate.prototype, _DesktopTextSelectionToolbarLayoutDelegateProxy);
export namespace DesktopTextSelectionToolbarLayoutDelegate { export function implement(args: [options: {anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): DesktopTextSelectionToolbarLayoutDelegate {
return constructProxy(_DesktopTextSelectionToolbarLayoutDelegateProxy, args, implementation) as DesktopTextSelectionToolbarLayoutDelegate; } }
_flaxBindInstanceType<DesktopTextSelectionToolbarLayoutDelegate, typeof DesktopTextSelectionToolbarLayoutDelegate>(DesktopTextSelectionToolbarLayoutDelegate, "flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", ["flax.core/sdk_rendering#type:SingleChildLayoutDelegate","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchor" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
