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
const _flaxMemberParameters0 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"oldClipper","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"shape","required":true},{"name":"textDirection"}] as const;
const _flaxMemberParameters4 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShapeBorderClipper extends Omit<upstream0.CustomClipper<upstream1.Path>, _flaxOwnMembers0>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.CustomClipper<upstream1.Path>>, Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ShapeBorderClipper: unique symbol;
readonly [_flaxDartTypeValue]: ShapeBorderClipper;

}
defineObject("flax.core/sdk_rendering#type:ShapeBorderClipper", ["shape","textDirection"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ShapeBorderClipper", "object", {"getClip":_flaxMemberParameters0,"getApproximateClipRect":_flaxMemberParameters0,"shouldReclip":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _ShapeBorderClipperProxy = {type: "flax.core/sdk_rendering#type:ShapeBorderClipper", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"addListener":_flaxMemberParameters4,"removeListener":_flaxMemberParameters4,"getClip":_flaxMemberParameters0,"getApproximateClipRect":_flaxMemberParameters0,"shouldReclip":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["shape","textDirection"], setters: [], contextMembers: [], superMembers: ["get:shape","get:textDirection","addListener","removeListener","getClip","getApproximateClipRect","shouldReclip","toString"]} as const;
export interface ShapeBorderClipper {
readonly [_flaxDartTypeValue]: ShapeBorderClipper;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
getClip(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream1.Path;
getApproximateClipRect(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream6.Rect;
shouldReclip(oldClipper: Readonly<{ "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper": readonly [upstream1.Path] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
toString(): string;
get shape(): upstream3.ShapeBorder;
get textDirection(): upstream4.TextDirection | null;
}
export abstract class ShapeBorderClipper extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShapeBorderClipper>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShapeBorderClipper;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ShapeBorderClipper", readonly [], false];
constructor(options: {shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined}) { super(_ShapeBorderClipperProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShapeBorderClipper.prototype, _ShapeBorderClipperProxy);
export namespace ShapeBorderClipper { export function implement(args: [options: {shape: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }>; textDirection?: upstream4.TextDirection | null | undefined}], implementation: {}): ShapeBorderClipper {
return constructProxy(_ShapeBorderClipperProxy, args, implementation) as ShapeBorderClipper; } }
_flaxBindInstanceType<ShapeBorderClipper, typeof ShapeBorderClipper>(ShapeBorderClipper, "flax.core/sdk_rendering#type:ShapeBorderClipper", ["flax.core/sdk_rendering#type:CustomClipper","flax.core/flutter#type:Listenable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "shape" | "textDirection" | "addListener" | "removeListener" | "getClip" | "getApproximateClipRect" | "shouldReclip" | "toString" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::ShapeBorderClipper" | "__flaxBound:package:flutter/src/rendering/proxy_box.dart::CustomClipper" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
