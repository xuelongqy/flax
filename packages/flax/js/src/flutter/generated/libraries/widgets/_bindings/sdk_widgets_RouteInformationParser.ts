// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters23, _flaxMemberParameters328, _flaxMemberParameters264, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RouteInformationParser<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [T] }> { readonly __RouteInformationParser: unique symbol;
readonly [_flaxDartTypeValue]: RouteInformationParser<T>;

}
defineObject("flax.core/sdk_widgets#type:RouteInformationParser", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RouteInformationParser", "object", {"parseRouteInformation":_flaxMemberParameters23,"parseRouteInformationWithDependencies":_flaxMemberParameters328,"restoreRouteInformation":_flaxMemberParameters264}, {}), []);
const _RouteInformationParserProxy = {type: "flax.core/sdk_widgets#type:RouteInformationParser", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"parseRouteInformation":_flaxMemberParameters23,"parseRouteInformationWithDependencies":_flaxMemberParameters328,"restoreRouteInformation":_flaxMemberParameters264}, getters: [], setters: [], contextMembers: [], superMembers: ["parseRouteInformation","parseRouteInformationWithDependencies","restoreRouteInformation"]} as const;
export interface RouteInformationParser<T extends unknown | null = unknown | null> {
readonly [_flaxDartTypeValue]: RouteInformationParser<T>;

parseRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>): Promise<T>;
parseRouteInformationWithDependencies(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>, context: upstream1.BuildContext): Promise<T>;
restoreRouteInformation(configuration: (T | DartInput<T>)): upstream0.RouteInformation | null;
}
export abstract class RouteInformationParser<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RouteInformationParser<unknown | null>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RouteInformationParser<unknown | null>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RouteInformationParser", readonly [readonly ["any", null, readonly [], true]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_RouteInformationParserProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(RouteInformationParser.prototype, _RouteInformationParserProxy);
export namespace RouteInformationParser { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {}): RouteInformationParser<T> {
return constructProxy(_RouteInformationParserProxy, args, implementation) as RouteInformationParser<T>; } }
_flaxBindInstanceType<RouteInformationParser<unknown | null>, typeof RouteInformationParser>(RouteInformationParser, "flax.core/sdk_widgets#type:RouteInformationParser", ["dart:core::Object"]);
_flaxDefineDartTypes(RouteInformationParser, "flax.core/sdk_widgets#type:RouteInformationParser", {...{"category":"object","constructors":{}}, proxy: _RouteInformationParserProxy});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouteInformationParser<_Selected0>) & {readonly prototype: RouteInformationParser<_Selected0>;implement(args: readonly [], implementation: Partial<RouteInformationParser<_Selected0>>): RouteInformationParser<_Selected0>;} & _FlaxInstanceType<RouteInformationParser<_Selected0>> & _FlaxDartType<RouteInformationParser<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new () => RouteInformationParser<_Selected0>) & {readonly prototype: RouteInformationParser<_Selected0>;implement(args: readonly [], implementation: Partial<RouteInformationParser<_Selected0>>): RouteInformationParser<_Selected0>;} & _FlaxInstanceType<RouteInformationParser<_Selected0>> & _FlaxDartType<RouteInformationParser<_Selected0>> : never : never; }
