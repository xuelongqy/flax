// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { _flaxMemberParameters0, _flaxMemberParameters175 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextBox extends Readonly<{ "__flaxBound:dart:ui::TextBox": readonly [] }> { readonly __TextBox: unique symbol;
readonly [_flaxDartTypeValue]: TextBox;

readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
readonly direction: upstream0.TextDirection;
readonly start: number;
readonly end: number;
toRect(): upstream1.Rect;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:TextBox", ["left","top","right","bottom","direction","start","end"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextBox", "object", {"toRect":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export namespace _TextBoxFactory {
export function fromLTRBD(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection): TextBox {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 5) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:TextBox", "fromLTRBD", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"direction","required":true,"positional":true}], [left, top, right, bottom, direction], {}) as TextBox;
}
}
const _TextBoxProxy = {type: "flax.core/sdk_dart_ui#type:TextBox", parameters: _flaxMemberParameters175, constructors: {"fromLTRBD": _flaxMemberParameters175}, methods: {"toRect":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["left","top","right","bottom","direction","start","end"], setters: [], contextMembers: [], superMembers: ["get:left","get:top","get:right","get:bottom","get:direction","get:start","get:end","toRect","toString"]} as const;
export interface _TextBoxNative extends TextBox {
readonly [_flaxDartTypeValue]: _TextBoxNative;
readonly [_flaxDartConstructors]?: {"fromLTRBD": (left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection) => void;};

toRect(): upstream1.Rect;
toString(): string;
get left(): number;
get top(): number;
get right(): number;
get bottom(): number;
get direction(): upstream0.TextDirection;
get start(): number;
get end(): number;
}
export abstract class _TextBoxNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBox>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextBox;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false];
constructor(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection); constructor(call: _FlaxProxySuper<_TextBoxNative>); constructor(...args: unknown[]) { super(_TextBoxProxy, args); }
}
_flaxDefineProxyBase(_TextBoxNative.prototype, _TextBoxProxy);
export namespace _TextBoxFactory { export function implement(args: [left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection], implementation: {}): TextBox {
return constructProxy(_TextBoxProxy, args, implementation) as TextBox; } }
const _TextBoxBinding = _flaxProxyFactory(_TextBoxFactory, _TextBoxNative) as unknown as typeof _TextBoxFactory & (new(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection) => _TextBoxNative) & (new(call: _FlaxProxySuper<_TextBoxNative>) => _TextBoxNative);
export const TextBox: typeof _TextBoxBinding & _FlaxInstanceType<TextBox> & _FlaxDartType<TextBox, readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false]> = _flaxBindInstanceType<TextBox, typeof _TextBoxBinding>(_TextBoxBinding, "flax.core/sdk_dart_ui#type:TextBox", ["dart:core::Object"]) as typeof _TextBoxBinding & _FlaxInstanceType<TextBox> & _FlaxDartType<TextBox, readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false]>;
