// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"topLeft","required":true},{"name":"topRight","required":true},{"name":"bottomRight","required":true},{"name":"bottomLeft","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DisplayCornerRadii extends Readonly<{ "__flaxBound:dart:ui::DisplayCornerRadii": readonly [] }> { readonly __DisplayCornerRadii: unique symbol;
readonly [_flaxDartTypeValue]: DisplayCornerRadii;

}
defineObject("flax.core/sdk_dart_ui#type:DisplayCornerRadii", ["topLeft","topRight","bottomRight","bottomLeft"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:DisplayCornerRadii", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _DisplayCornerRadiiProxy = {type: "flax.core/sdk_dart_ui#type:DisplayCornerRadii", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["topLeft","topRight","bottomRight","bottomLeft"], setters: [], contextMembers: [], superMembers: ["get:topLeft","get:topRight","get:bottomRight","get:bottomLeft","toString"]} as const;
export interface DisplayCornerRadii {
readonly [_flaxDartTypeValue]: DisplayCornerRadii;

toString(): string;
get topLeft(): number;
get topRight(): number;
get bottomRight(): number;
get bottomLeft(): number;
}
export abstract class DisplayCornerRadii extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisplayCornerRadii>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DisplayCornerRadii;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:DisplayCornerRadii", readonly [], false];
constructor(options: {topLeft: number; topRight: number; bottomRight: number; bottomLeft: number}) { super(_DisplayCornerRadiiProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DisplayCornerRadii.prototype, _DisplayCornerRadiiProxy);
export namespace DisplayCornerRadii { export function implement(args: [options: {topLeft: number; topRight: number; bottomRight: number; bottomLeft: number}], implementation: {}): DisplayCornerRadii {
return constructProxy(_DisplayCornerRadiiProxy, args, implementation) as DisplayCornerRadii; } }
_flaxBindInstanceType<DisplayCornerRadii, typeof DisplayCornerRadii>(DisplayCornerRadii, "flax.core/sdk_dart_ui#type:DisplayCornerRadii", ["dart:core::Object"]);
