// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters186, _flaxMemberParameters0, _flaxMemberParameters171, _flaxMemberParameters187 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewConstraints extends Readonly<{ "__flaxBound:dart:ui::ViewConstraints": readonly [] }> { readonly __ViewConstraints: unique symbol;
readonly [_flaxDartTypeValue]: ViewConstraints;

readonly minWidth: number;
readonly maxWidth: number;
readonly minHeight: number;
readonly maxHeight: number;
readonly isTight: boolean;
isSatisfiedBy(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
operatorDivide(factor: number): ViewConstraints;
}
defineObject("flax.core/sdk_dart_ui#type:ViewConstraints", ["minWidth","maxWidth","minHeight","maxHeight","isTight"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:ViewConstraints", "object", {"isSatisfiedBy":_flaxMemberParameters186,"toString":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters171}, {}), []);
export function _ViewConstraintsFactory(options: { minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined } = {}): ViewConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ViewConstraints", "", [{"name":"minWidth"},{"name":"maxWidth"},{"name":"minHeight"},{"name":"maxHeight"}], [], options) as ViewConstraints;
}
export namespace _ViewConstraintsFactory {
export function tight(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): ViewConstraints {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:ViewConstraints", "tight", _flaxMemberParameters186, [size], {}) as ViewConstraints;
}
}
const _ViewConstraintsProxy = {type: "flax.core/sdk_dart_ui#type:ViewConstraints", parameters: _flaxMemberParameters187, constructors: {"": _flaxMemberParameters187,"tight": _flaxMemberParameters186}, methods: {"isSatisfiedBy":_flaxMemberParameters186,"toString":_flaxMemberParameters0,"operatorDivide":_flaxMemberParameters171}, getters: ["minWidth","maxWidth","minHeight","maxHeight","isTight"], setters: [], contextMembers: [], superMembers: ["get:minWidth","get:maxWidth","get:minHeight","get:maxHeight","get:isTight","isSatisfiedBy","toString","operatorDivide"]} as const;
export interface _ViewConstraintsNative extends ViewConstraints {
readonly [_flaxDartTypeValue]: _ViewConstraintsNative;
readonly [_flaxDartConstructors]?: {"": (options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}) => void;"tight": (size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => void;};

isSatisfiedBy(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
toString(): string;
operatorDivide(factor: number): ViewConstraints;
get minWidth(): number;
get maxWidth(): number;
get minHeight(): number;
get maxHeight(): number;
get isTight(): boolean;
}
export abstract class _ViewConstraintsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConstraints>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ViewConstraints;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false];
constructor(options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}); constructor(call: _FlaxProxySuper<_ViewConstraintsNative>); constructor(...args: unknown[]) { super(_ViewConstraintsProxy, args); }
}
_flaxDefineProxyBase(_ViewConstraintsNative.prototype, _ViewConstraintsProxy);
export namespace _ViewConstraintsFactory { export function implement(args: [options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}], implementation: {}): ViewConstraints {
return constructProxy(_ViewConstraintsProxy, args, implementation) as ViewConstraints; } }
const _ViewConstraintsBinding = _flaxProxyFactory(_ViewConstraintsFactory, _ViewConstraintsNative) as unknown as typeof _ViewConstraintsFactory & (new(options?: {minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined}) => _ViewConstraintsNative) & (new(call: _FlaxProxySuper<_ViewConstraintsNative>) => _ViewConstraintsNative);
export const ViewConstraints: typeof _ViewConstraintsBinding & _FlaxInstanceType<ViewConstraints> & _FlaxDartType<ViewConstraints, readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false]> = _flaxBindInstanceType<ViewConstraints, typeof _ViewConstraintsBinding>(_ViewConstraintsBinding, "flax.core/sdk_dart_ui#type:ViewConstraints", ["dart:core::Object"]) as typeof _ViewConstraintsBinding & _FlaxInstanceType<ViewConstraints> & _FlaxDartType<ViewConstraints, readonly ["class", "flax.core/sdk_dart_ui#type:ViewConstraints", readonly [], false]>;
