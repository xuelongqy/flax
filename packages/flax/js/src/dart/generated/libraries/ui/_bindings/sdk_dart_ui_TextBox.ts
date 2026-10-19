// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true},{"name":"direction","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextBox extends Readonly<{ "__flaxBound:dart:ui::TextBox": readonly [] }> { readonly __TextBox: unique symbol;
readonly [_flaxDartTypeValue]: TextBox;

}
defineObject("flax.core/sdk_dart_ui#type:TextBox", ["left","top","right","bottom","direction","start","end"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:TextBox", "object", {"toRect":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
const _TextBoxProxy = {type: "flax.core/sdk_dart_ui#type:TextBox", parameters: _flaxMemberParameters1, constructors: {"fromLTRBD": _flaxMemberParameters1}, methods: {"toRect":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["left","top","right","bottom","direction","start","end"], setters: [], contextMembers: [], superMembers: ["get:left","get:top","get:right","get:bottom","get:direction","get:start","get:end","toRect","toString"]} as const;
export interface TextBox {
readonly [_flaxDartTypeValue]: TextBox;

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
export abstract class TextBox extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextBox>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextBox;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:TextBox", readonly [], false];
constructor(left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection) { super(_TextBoxProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TextBox.prototype, _TextBoxProxy);
export namespace TextBox { export function implement(args: [left: number, top: number, right: number, bottom: number, direction: upstream0.TextDirection], implementation: {}): TextBox {
return constructProxy(_TextBoxProxy, args, implementation) as TextBox; } }
_flaxBindInstanceType<TextBox, typeof TextBox>(TextBox, "flax.core/sdk_dart_ui#type:TextBox", ["dart:core::Object"]);
