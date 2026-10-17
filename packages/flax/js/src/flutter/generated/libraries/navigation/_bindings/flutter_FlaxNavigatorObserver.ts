// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"route","required":true,"positional":true},{"name":"previousRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"newRoute","required":false,"positional":false},{"name":"oldRoute","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"topRoute","required":true,"positional":true},{"name":"previousTopRoute","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlaxNavigatorObserver extends Omit<upstream0.NavigatorObserver, typeof _flaxDartTypeValue | "navigator" | "didPush" | "didPop" | "didRemove" | "didReplace" | "didChangeTop" | "didStartUserGesture" | "didStopUserGesture">, Readonly<{ "__flaxBound:package:flax/bindings.dart::FlaxNavigatorObserver": readonly [] }> { readonly __FlaxNavigatorObserver: unique symbol;

readonly navigator: upstream1.NavigatorState | null;
didPush(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didPop(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didRemove(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didReplace(options?: {newRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null | undefined; oldRoute?: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null | undefined}): void;
didChangeTop(topRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>, previousTopRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didStartUserGesture(route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>, previousRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null): void;
didStopUserGesture(): void;
}
defineObject("flax.core/flutter#type:FlaxNavigatorObserver", ["navigator"], [], _flaxBindingMethods("flax.core/flutter#type:FlaxNavigatorObserver", "object", {"didPush":_flaxMemberParameters0,"didPop":_flaxMemberParameters0,"didRemove":_flaxMemberParameters0,"didReplace":_flaxMemberParameters1,"didChangeTop":_flaxMemberParameters2,"didStartUserGesture":_flaxMemberParameters0,"didStopUserGesture":_flaxMemberParameters3}, {}), []);
export function _FlaxNavigatorObserverFactory(): FlaxNavigatorObserver {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FlaxNavigatorObserver", "", [], [], {}) as FlaxNavigatorObserver;
}
export const FlaxNavigatorObserver: typeof _FlaxNavigatorObserverFactory & _FlaxInstanceType<FlaxNavigatorObserver> & _FlaxDartType<FlaxNavigatorObserver, readonly ["class", "flax.core/flutter#type:FlaxNavigatorObserver", readonly [], false]> = _flaxBindInstanceType<FlaxNavigatorObserver, typeof _FlaxNavigatorObserverFactory>(_FlaxNavigatorObserverFactory, "flax.core/flutter#type:FlaxNavigatorObserver", ["flax.core/flutter#type:NavigatorObserver","dart:core::Object"]) as typeof _FlaxNavigatorObserverFactory & _FlaxInstanceType<FlaxNavigatorObserver> & _FlaxDartType<FlaxNavigatorObserver, readonly ["class", "flax.core/flutter#type:FlaxNavigatorObserver", readonly [], false]>;
