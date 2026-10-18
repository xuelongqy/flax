// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"physicalDoubleTapSlop","required":false,"positional":false},{"name":"physicalTouchSlop","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureSettings extends Readonly<{ "__flaxBound:dart:ui::GestureSettings": readonly [] }> { readonly __GestureSettings: unique symbol;
readonly [_flaxDartTypeValue]: GestureSettings;

}
defineObject("flax.core/sdk_dart_ui#type:GestureSettings", ["physicalTouchSlop","physicalDoubleTapSlop"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:GestureSettings", "object", {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, {}), []);
const _GestureSettingsProxy = {type: "flax.core/sdk_dart_ui#type:GestureSettings", parameters: [{"name":"physicalTouchSlop","required":false,"positional":false},{"name":"physicalDoubleTapSlop","required":false,"positional":false}], constructors: {"":[{"name":"physicalTouchSlop","required":false,"positional":false},{"name":"physicalDoubleTapSlop","required":false,"positional":false}]}, methods: {"copyWith":_flaxMemberParameters0,"toString":_flaxMemberParameters1}, getters: ["physicalTouchSlop","physicalDoubleTapSlop"], setters: [], contextMembers: [], superMembers: ["get:physicalTouchSlop","get:physicalDoubleTapSlop","copyWith","toString"]} as const;
export interface GestureSettings {
readonly [_flaxDartTypeValue]: GestureSettings;

copyWith(options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}): GestureSettings;
toString(): string;
get physicalTouchSlop(): number | null;
get physicalDoubleTapSlop(): number | null;
}
export abstract class GestureSettings extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureSettings>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GestureSettings;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:GestureSettings", readonly [], false];
constructor(options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}) { super(_GestureSettingsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GestureSettings.prototype, _GestureSettingsProxy);
export namespace GestureSettings { export function implement(args: [options?: {physicalTouchSlop?: number | null | undefined; physicalDoubleTapSlop?: number | null | undefined}], implementation: {}): GestureSettings {
return constructProxy(_GestureSettingsProxy, args, implementation) as GestureSettings; } }
_flaxBindInstanceType<GestureSettings, typeof GestureSettings>(GestureSettings, "flax.core/sdk_dart_ui#type:GestureSettings", ["dart:core::Object"]);
