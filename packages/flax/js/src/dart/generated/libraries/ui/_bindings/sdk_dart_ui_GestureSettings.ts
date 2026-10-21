// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters58, _flaxMemberParameters0, _flaxMemberParameters59 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureSettings extends Readonly<{ "__flaxBound:dart:ui::GestureSettings": readonly [] }> { readonly __GestureSettings: unique symbol;
readonly [_flaxDartTypeValue]: GestureSettings;

readonly physicalTouchSlop: number | null;
readonly physicalDoubleTapSlop: number | null;
copyWith(options?: {physicalDoubleTapSlop?: number | null | undefined; physicalTouchSlop?: number | null | undefined}): GestureSettings;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:GestureSettings", ["physicalTouchSlop","physicalDoubleTapSlop"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:GestureSettings", "object", {"copyWith":_flaxMemberParameters58,"toString":_flaxMemberParameters0}, {}), []);
export function _GestureSettingsFactory(options: { physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined } = {}): GestureSettings {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:GestureSettings", "", [{"name":"physicalTouchSlop"},{"name":"physicalDoubleTapSlop"}], [], options) as GestureSettings;
}
const _GestureSettingsProxy = {type: "flax.core/sdk_dart_ui#type:GestureSettings", parameters: _flaxMemberParameters59, constructors: {"": _flaxMemberParameters59}, methods: {"copyWith":_flaxMemberParameters58,"toString":_flaxMemberParameters0}, getters: ["physicalTouchSlop","physicalDoubleTapSlop"], setters: [], contextMembers: [], superMembers: ["get:physicalTouchSlop","get:physicalDoubleTapSlop","copyWith","toString"]} as const;
export interface _GestureSettingsNative extends GestureSettings {
readonly [_flaxDartTypeValue]: _GestureSettingsNative;

copyWith(options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}): GestureSettings;
toString(): string;
get physicalTouchSlop(): number | null;
get physicalDoubleTapSlop(): number | null;
}
export abstract class _GestureSettingsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureSettings>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GestureSettings;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false];
constructor(options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}) { super(_GestureSettingsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_GestureSettingsNative.prototype, _GestureSettingsProxy);
export namespace _GestureSettingsFactory { export function implement(args: [options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}], implementation: {}): GestureSettings {
return constructProxy(_GestureSettingsProxy, args, implementation) as GestureSettings; } }
const _GestureSettingsBinding = _flaxProxyFactory(_GestureSettingsFactory, _GestureSettingsNative) as unknown as typeof _GestureSettingsFactory & (new(options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}) => _GestureSettingsNative);
export const GestureSettings: typeof _GestureSettingsBinding & _FlaxInstanceType<GestureSettings> & _FlaxDartType<GestureSettings, readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false]> = _flaxBindInstanceType<GestureSettings, typeof _GestureSettingsBinding>(_GestureSettingsBinding, "flax.core/sdk_dart_ui#type:GestureSettings", ["dart:core::Object"]) as typeof _GestureSettingsBinding & _FlaxInstanceType<GestureSettings> & _FlaxDartType<GestureSettings, readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false]>;
