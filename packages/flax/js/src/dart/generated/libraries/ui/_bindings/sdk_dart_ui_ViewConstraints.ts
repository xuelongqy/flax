// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"factor","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"minWidth"},{"name":"maxWidth"},{"name":"minHeight"},{"name":"maxHeight"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewConstraints extends Readonly<{ "__flaxBound:dart:ui::ViewConstraints": readonly [] }> { readonly __ViewConstraints: unique symbol;
readonly [_flaxDartTypeValue]: ViewConstraints;

}
defineObject("flax.core/sdk_dart_ui#type:ViewConstraints", ["minWidth","maxWidth","minHeight","maxHeight","isTight"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ViewConstraints", "object", {"isSatisfiedBy":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters2}, {}), []);
const _ViewConstraintsProxy = {type: "flax.core/sdk_dart_ui#type:ViewConstraints", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"isSatisfiedBy":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"operatorDivide":_flaxMemberParameters2}, getters: ["minWidth","maxWidth","minHeight","maxHeight","isTight"], setters: [], contextMembers: [], superMembers: ["get:minWidth","get:maxWidth","get:minHeight","get:maxHeight","get:isTight","isSatisfiedBy","toString","operatorDivide"]} as const;
export interface ViewConstraints {
readonly [_flaxDartTypeValue]: ViewConstraints;

isSatisfiedBy(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
operatorDivide(factor: number): ViewConstraints;
get minWidth(): number;
get maxWidth(): number;
get minHeight(): number;
get maxHeight(): number;
get isTight(): boolean;
}
export abstract class ViewConstraints extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConstraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ViewConstraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false];
constructor(options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}) { super(_ViewConstraintsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ViewConstraints.prototype, _ViewConstraintsProxy);
export namespace ViewConstraints { export function implement(args: [options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}], implementation: {}): ViewConstraints {
return constructProxy(_ViewConstraintsProxy, args, implementation) as ViewConstraints; } }
_flaxBindInstanceType<ViewConstraints, typeof ViewConstraints>(ViewConstraints, "flax.core/sdk_dart_ui#type:ViewConstraints", ["dart:core::Object"]);
