// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"delta","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"container","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"textDirection","required":true},{"name":"start","required":true},{"name":"top","required":true},{"name":"end","required":true},{"name":"bottom","required":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RelativeRect extends Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> { readonly __RelativeRect: unique symbol;
readonly [_flaxDartTypeValue]: RelativeRect;

readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
readonly hasInsets: boolean;
shift(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): RelativeRect;
inflate(delta: number): RelativeRect;
deflate(delta: number): RelativeRect;
intersect(other: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>): RelativeRect;
toRect(container: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): upstream2.Rect;
toSize(container: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream3.Size;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:RelativeRect", ["left","top","right","bottom","hasInsets"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:RelativeRect", "object", {"shift":_flaxMemberParameters0,"inflate":_flaxMemberParameters1,"deflate":_flaxMemberParameters1,"intersect":_flaxMemberParameters2,"toRect":_flaxMemberParameters3,"toSize":_flaxMemberParameters3,"toString":_flaxMemberParameters4}, {}), []);
export namespace _RelativeRectFactory {
export function fromDirectional(options: { textDirection: upstream0.TextDirection; start: number; top: number; end: number; bottom: number }): RelativeRect {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:RelativeRect", "fromDirectional", [{"name":"textDirection","required":true},{"name":"start","required":true},{"name":"top","required":true},{"name":"end","required":true},{"name":"bottom","required":true}], [], options) as RelativeRect;
}
}
const _RelativeRectProxy = {type: "flax.core/sdk_rendering#type:RelativeRect", parameters: _flaxMemberParameters4, constructors: {"fromDirectional": _flaxMemberParameters5}, methods: {"shift":_flaxMemberParameters0,"inflate":_flaxMemberParameters1,"deflate":_flaxMemberParameters1,"intersect":_flaxMemberParameters2,"toRect":_flaxMemberParameters3,"toSize":_flaxMemberParameters3,"toString":_flaxMemberParameters4}, getters: ["left","top","right","bottom","hasInsets","hashCode"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _RelativeRectFactory { export function implement(args: [], implementation: {shift: ((offset: upstream1.Offset) => Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>); inflate: ((delta: number) => Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>); deflate: ((delta: number) => Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>); intersect: ((other: RelativeRect) => Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>); toRect: ((container: upstream2.Rect) => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>); toSize: ((container: upstream3.Size) => Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>); toString: (() => string); get left(): number; get top(): number; get right(): number; get bottom(): number; get hasInsets(): boolean; get hashCode(): number}): RelativeRect {
return constructProxy(_RelativeRectProxy, args, implementation) as RelativeRect; } }
export namespace _RelativeRectFactory { export declare const fill: RelativeRect; }
_flaxDefineStaticGetters(_RelativeRectFactory, "flax.core/sdk_rendering#read:RelativeRect.", ["fill"]);
export namespace _RelativeRectFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }> | null, t: number): RelativeRect | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:RelativeRect.lerp", [a, b, t]);
return _flaxResult as RelativeRect | null;
} }
export const RelativeRect: typeof _RelativeRectFactory & _FlaxInstanceType<RelativeRect> & _FlaxDartType<RelativeRect, readonly ["class", "flax.core/sdk_rendering#type:RelativeRect", readonly [], false]> = _flaxBindInstanceType<RelativeRect, typeof _RelativeRectFactory>(_RelativeRectFactory, "flax.core/sdk_rendering#type:RelativeRect", ["dart:core::Object"]) as typeof _RelativeRectFactory & _FlaxInstanceType<RelativeRect> & _FlaxDartType<RelativeRect, readonly ["class", "flax.core/sdk_rendering#type:RelativeRect", readonly [], false]>;
