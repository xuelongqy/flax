// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"oldRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"didPop","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"didPop","required":true,"positional":true},{"name":"result","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"result","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"nextRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"previousRoute","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Route<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [] }> { readonly __Route: unique symbol;

readonly requestFocus: boolean;
readonly navigator: upstream0.NavigatorState | null;
readonly settings: upstream1.RouteSettings;
readonly restorationScopeId: upstream2.ValueListenable<string | null>;
readonly willHandlePopInternally: boolean;
readonly currentResult: T | null;
readonly popped: Promise<T | null>;
readonly isCurrent: boolean;
readonly isFirst: boolean;
readonly hasActiveRouteBelow: boolean;
readonly isActive: boolean;
install(): void;
didAdd(): void;
didReplace(oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
onPopInvoked(didPop: boolean): void;
onPopInvokedWithResult(didPop: boolean, result: (T | DartInput<T>) | null): void;
didPop(result: (T | DartInput<T>) | null): boolean;
didComplete(result: (T | DartInput<T>) | null): void;
didPopNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>): void;
didChangeNext(nextRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didChangePrevious(previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
changedInternalState(): void;
changedExternalState(): void;
dispose(): void;
}
defineObject("flax.core/flutter#type:Route", ["requestFocus","navigator","settings","restorationScopeId","willHandlePopInternally","currentResult","popped","isCurrent","isFirst","hasActiveRouteBelow","isActive"], [], _flaxBindingMethods("flax.core/flutter#type:Route", "object", {"install":_flaxMemberParameters0,"didAdd":_flaxMemberParameters0,"didReplace":_flaxMemberParameters1,"onPopInvoked":_flaxMemberParameters2,"onPopInvokedWithResult":_flaxMemberParameters3,"didPop":_flaxMemberParameters4,"didComplete":_flaxMemberParameters4,"didPopNext":_flaxMemberParameters5,"didChangeNext":_flaxMemberParameters5,"didChangePrevious":_flaxMemberParameters6,"changedInternalState":_flaxMemberParameters0,"changedExternalState":_flaxMemberParameters0,"dispose":_flaxMemberParameters0}, {}), []);
export const Route: object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Route<unknown | null>, object>({}, "flax.core/flutter#type:Route", ["package:flutter/src/widgets/navigator.dart::_RoutePlaceholder","dart:core::Object"]) as object & _FlaxInstanceType<Route<unknown | null>> & _FlaxDartType<Route<unknown | null>, readonly ["class", "flax.core/flutter#type:Route", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Route, "flax.core/flutter#type:Route", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: Route<_Selected0>;} & _FlaxInstanceType<Route<_Selected0>> & _FlaxDartType<Route<_Selected0>> : never : never; }
