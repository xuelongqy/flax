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
import { _flaxMemberParameters199, _flaxMemberParameters292, _flaxMemberParameters293, _flaxMemberParameters294 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SpellCheckSuggestionsToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }> { readonly __SpellCheckSuggestionsToolbarLayoutDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SpellCheckSuggestionsToolbarLayoutDelegate;

readonly anchor: upstream1.Offset;
getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
}
defineObject("flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", ["anchor"], [], _flaxBindingMethods("flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", "object", {"shouldRelayout":_flaxMemberParameters199}, {}), [], undefined, "flax.core/sdk_rendering#type:SingleChildLayoutDelegate");
export function _SpellCheckSuggestionsToolbarLayoutDelegateFactory(options: { anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): SpellCheckSuggestionsToolbarLayoutDelegate {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", "", [{"name":"anchor","required":true}], [], options) as SpellCheckSuggestionsToolbarLayoutDelegate;
}
const _SpellCheckSuggestionsToolbarLayoutDelegateProxy = {type: "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", parameters: _flaxMemberParameters292, constructors: {"": _flaxMemberParameters292}, methods: {"getSize":_flaxMemberParameters293,"getConstraintsForChild":_flaxMemberParameters293,"getPositionForChild":_flaxMemberParameters294,"shouldRelayout":_flaxMemberParameters199}, getters: ["anchor"], setters: [], contextMembers: [], superMembers: ["get:anchor","getSize","getConstraintsForChild","getPositionForChild","shouldRelayout"]} as const;
export interface _SpellCheckSuggestionsToolbarLayoutDelegateNative extends SpellCheckSuggestionsToolbarLayoutDelegate {
readonly [_flaxDartTypeValue]: _SpellCheckSuggestionsToolbarLayoutDelegateNative;

getSize(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream2.Size;
getConstraintsForChild(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream3.BoxConstraints;
getPositionForChild(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, childSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Offset;
shouldRelayout(oldDelegate: Readonly<{ "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [] }>): boolean;
get anchor(): upstream1.Offset;
}
export abstract class _SpellCheckSuggestionsToolbarLayoutDelegateNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SpellCheckSuggestionsToolbarLayoutDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", readonly [], false];
constructor(options: {anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_SpellCheckSuggestionsToolbarLayoutDelegateProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SpellCheckSuggestionsToolbarLayoutDelegateNative.prototype, _SpellCheckSuggestionsToolbarLayoutDelegateProxy);
export namespace _SpellCheckSuggestionsToolbarLayoutDelegateFactory { export function implement(args: [options: {anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): SpellCheckSuggestionsToolbarLayoutDelegate {
return constructProxy(_SpellCheckSuggestionsToolbarLayoutDelegateProxy, args, implementation) as SpellCheckSuggestionsToolbarLayoutDelegate; } }
const _SpellCheckSuggestionsToolbarLayoutDelegateBinding = _flaxProxyFactory(_SpellCheckSuggestionsToolbarLayoutDelegateFactory, _SpellCheckSuggestionsToolbarLayoutDelegateNative) as unknown as typeof _SpellCheckSuggestionsToolbarLayoutDelegateFactory & (new(options: {anchor: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _SpellCheckSuggestionsToolbarLayoutDelegateNative);
export const SpellCheckSuggestionsToolbarLayoutDelegate: typeof _SpellCheckSuggestionsToolbarLayoutDelegateBinding & _FlaxInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate> & _FlaxDartType<SpellCheckSuggestionsToolbarLayoutDelegate, readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", readonly [], false]> = _flaxBindInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate, typeof _SpellCheckSuggestionsToolbarLayoutDelegateBinding>(_SpellCheckSuggestionsToolbarLayoutDelegateBinding, "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", ["flax.core/sdk_rendering#type:SingleChildLayoutDelegate","dart:core::Object"]) as typeof _SpellCheckSuggestionsToolbarLayoutDelegateBinding & _FlaxInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate> & _FlaxDartType<SpellCheckSuggestionsToolbarLayoutDelegate, readonly ["class", "flax.material/material#type:SpellCheckSuggestionsToolbarLayoutDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchor" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:material_ui/src/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
