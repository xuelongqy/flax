// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomClipper';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters50, _flaxMemberParameters51, _flaxMemberParameters1, _flaxMemberParameters331, _flaxMemberParameters49 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorderClipper extends Omit<upstream0.CustomClipper<upstream1.Path>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CustomClipper<upstream1.Path>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ShapeBorderClipper: unique symbol;
readonly [_flaxDartTypeValue]: ShapeBorderClipper;

readonly shape: upstream3.ShapeBorder;
readonly textDirection: upstream4.TextDirection | null;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
getClip(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Path;
getApproximateClipRect(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream6.Rect;
shouldReclip(oldClipper: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:ShapeBorderClipper", ["shape","textDirection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ShapeBorderClipper", "object", {"getClip":_flaxMemberParameters50,"getApproximateClipRect":_flaxMemberParameters50,"shouldReclip":_flaxMemberParameters51,"toString":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export function _ShapeBorderClipperFactory(options: { shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined }): ShapeBorderClipper {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ShapeBorderClipper", "", [{"name":"shape","required":true},{"name":"textDirection"}], [], options) as ShapeBorderClipper;
}
const _ShapeBorderClipperProxy = {type: "flax.core/sdk_rendering#type:ShapeBorderClipper", parameters: _flaxMemberParameters331, constructors: {"": _flaxMemberParameters331}, methods: {"addListener":_flaxMemberParameters49,"removeListener":_flaxMemberParameters49,"getClip":_flaxMemberParameters50,"getApproximateClipRect":_flaxMemberParameters50,"shouldReclip":_flaxMemberParameters51,"toString":_flaxMemberParameters1}, getters: ["shape","textDirection"], setters: [], contextMembers: [], superMembers: ["get:shape","get:textDirection","addListener","removeListener","getClip","getApproximateClipRect","shouldReclip","toString"]} as const;
export interface _ShapeBorderClipperNative extends ShapeBorderClipper {
readonly [_flaxDartTypeValue]: _ShapeBorderClipperNative;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
getClip(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Path;
getApproximateClipRect(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream6.Rect;
shouldReclip(oldClipper: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
toString(): string;
get shape(): upstream3.ShapeBorder;
get textDirection(): upstream4.TextDirection | null;
}
export abstract class _ShapeBorderClipperNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderClipper>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapeBorderClipper;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ShapeBorderClipper", readonly [], false];
constructor(options: {shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined}) { super(_ShapeBorderClipperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ShapeBorderClipperNative.prototype, _ShapeBorderClipperProxy);
export namespace _ShapeBorderClipperFactory { export function implement(args: [options: {shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined}], implementation: {}): ShapeBorderClipper {
return constructProxy(_ShapeBorderClipperProxy, args, implementation) as ShapeBorderClipper; } }
const _ShapeBorderClipperBinding = _flaxProxyFactory(_ShapeBorderClipperFactory, _ShapeBorderClipperNative) as unknown as typeof _ShapeBorderClipperFactory & (new(options: {shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined}) => _ShapeBorderClipperNative);
export const ShapeBorderClipper: typeof _ShapeBorderClipperBinding & _FlaxInstanceType<ShapeBorderClipper> & _FlaxDartType<ShapeBorderClipper, readonly ["class", "flax.core/sdk_rendering#type:ShapeBorderClipper", readonly [], false]> = _flaxBindInstanceType<ShapeBorderClipper, typeof _ShapeBorderClipperBinding>(_ShapeBorderClipperBinding, "flax.core/sdk_rendering#type:ShapeBorderClipper", ["flax.core/sdk_rendering#type:CustomClipper","flax.core/flutter#type:Listenable","dart:core::Object"]) as typeof _ShapeBorderClipperBinding & _FlaxInstanceType<ShapeBorderClipper> & _FlaxDartType<ShapeBorderClipper, readonly ["class", "flax.core/sdk_rendering#type:ShapeBorderClipper", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "shape" | "textDirection" | "addListener" | "removeListener" | "getClip" | "getApproximateClipRect" | "shouldReclip" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
