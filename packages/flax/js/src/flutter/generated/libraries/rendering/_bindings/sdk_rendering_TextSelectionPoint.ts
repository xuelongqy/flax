// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { _flaxMemberParameters1, _flaxMemberParameters367 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionPoint extends Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [] }> { readonly __TextSelectionPoint: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionPoint;

readonly point: upstream0.Offset;
readonly direction: upstream1.TextDirection | null;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:TextSelectionPoint", ["point","direction"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:TextSelectionPoint", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _TextSelectionPointFactory(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null): TextSelectionPoint {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:TextSelectionPoint", "", [{"name":"point","required":true,"positional":true},{"name":"direction","required":true,"positional":true}], [point, direction], {}) as TextSelectionPoint;
}
const _TextSelectionPointProxy = {type: "flax.core/sdk_rendering#type:TextSelectionPoint", parameters: _flaxMemberParameters367, constructors: {"": _flaxMemberParameters367}, methods: {"toString":_flaxMemberParameters1}, getters: ["point","direction"], setters: [], contextMembers: [], superMembers: ["get:point","get:direction","toString"]} as const;
export interface _TextSelectionPointNative extends TextSelectionPoint {
readonly [_flaxDartTypeValue]: _TextSelectionPointNative;

toString(): string;
get point(): upstream0.Offset;
get direction(): upstream1.TextDirection | null;
}
export abstract class _TextSelectionPointNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionPoint>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionPoint;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false];
constructor(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null) { super(_TextSelectionPointProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextSelectionPointNative.prototype, _TextSelectionPointProxy);
export namespace _TextSelectionPointFactory { export function implement(args: [point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null], implementation: {}): TextSelectionPoint {
return constructProxy(_TextSelectionPointProxy, args, implementation) as TextSelectionPoint; } }
const _TextSelectionPointBinding = _flaxProxyFactory(_TextSelectionPointFactory, _TextSelectionPointNative) as unknown as typeof _TextSelectionPointFactory & (new(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, direction: upstream1.TextDirection | null) => _TextSelectionPointNative);
export const TextSelectionPoint: typeof _TextSelectionPointBinding & _FlaxInstanceType<TextSelectionPoint> & _FlaxDartType<TextSelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false]> = _flaxBindInstanceType<TextSelectionPoint, typeof _TextSelectionPointBinding>(_TextSelectionPointBinding, "flax.core/sdk_rendering#type:TextSelectionPoint", ["dart:core::Object"]) as typeof _TextSelectionPointBinding & _FlaxInstanceType<TextSelectionPoint> & _FlaxDartType<TextSelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:TextSelectionPoint", readonly [], false]>;
