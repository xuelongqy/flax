// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters72, _flaxMemberParameters73, _flaxMemberParameters74, _flaxMemberParameters75, _flaxMemberParameters0, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerRouter extends Readonly<{ "__flaxBound:package:flutter/src/gestures/pointer_router.dart::PointerRouter": readonly [] }> { readonly __PointerRouter: unique symbol;
readonly [_flaxDartTypeValue]: PointerRouter;

readonly debugGlobalRouteCount: number;
addRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): void;
removeRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void)): void;
addGlobalRoute(route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): void;
removeGlobalRoute(route: ((event: upstream0.PointerEvent) => void)): void;
route(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
}
defineObject("flax.core/sdk_gestures#type:PointerRouter", ["debugGlobalRouteCount"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerRouter", "object", {"addRoute":_flaxMemberParameters72,"removeRoute":_flaxMemberParameters73,"addGlobalRoute":_flaxMemberParameters74,"removeGlobalRoute":_flaxMemberParameters75,"route":_flaxMemberParameters0}, {}), []);
export function _PointerRouterFactory(): PointerRouter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_gestures#type:PointerRouter", "", [], [], {}) as PointerRouter;
}
const _PointerRouterProxy = {type: "flax.core/sdk_gestures#type:PointerRouter", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"addRoute":_flaxMemberParameters72,"removeRoute":_flaxMemberParameters73,"addGlobalRoute":_flaxMemberParameters74,"removeGlobalRoute":_flaxMemberParameters75,"route":_flaxMemberParameters0}, getters: ["debugGlobalRouteCount"], setters: [], contextMembers: [], superMembers: ["get:debugGlobalRouteCount","addRoute","removeRoute","addGlobalRoute","removeGlobalRoute","route"]} as const;
export interface _PointerRouterNative extends PointerRouter {
readonly [_flaxDartTypeValue]: _PointerRouterNative;

addRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): void;
removeRoute(pointer: number, route: ((event: upstream0.PointerEvent) => void)): void;
addGlobalRoute(route: ((event: upstream0.PointerEvent) => void), transform?: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): void;
removeGlobalRoute(route: ((event: upstream0.PointerEvent) => void)): void;
route(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
get debugGlobalRouteCount(): number;
}
export abstract class _PointerRouterNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerRouter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerRouter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerRouter", readonly [], false];
constructor() { super(_PointerRouterProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerRouterNative.prototype, _PointerRouterProxy);
export namespace _PointerRouterFactory { export function implement(args: [], implementation: {}): PointerRouter {
return constructProxy(_PointerRouterProxy, args, implementation) as PointerRouter; } }
const _PointerRouterBinding = _flaxProxyFactory(_PointerRouterFactory, _PointerRouterNative) as unknown as typeof _PointerRouterFactory & (new() => _PointerRouterNative);
export const PointerRouter: typeof _PointerRouterBinding & _FlaxInstanceType<PointerRouter> & _FlaxDartType<PointerRouter, readonly ["class", "flax.core/sdk_gestures#type:PointerRouter", readonly [], false]> = _flaxBindInstanceType<PointerRouter, typeof _PointerRouterBinding>(_PointerRouterBinding, "flax.core/sdk_gestures#type:PointerRouter", ["dart:core::Object"]) as typeof _PointerRouterBinding & _FlaxInstanceType<PointerRouter> & _FlaxDartType<PointerRouter, readonly ["class", "flax.core/sdk_gestures#type:PointerRouter", readonly [], false]>;
