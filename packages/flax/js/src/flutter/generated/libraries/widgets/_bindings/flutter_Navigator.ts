// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Page';
import '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Navigator extends WidgetDescription { readonly type: "flax.core/flutter#type:Navigator";  }
export function _NavigatorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; pages?: Bindable<DartListInput<upstream1.Page<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null] }>>> | undefined; onPopPage?: Bindable<((route: upstream2.Route<unknown | null>, result: unknown | null) => boolean) | null> | undefined; initialRoute?: Bindable<string | null> | undefined; onGenerateInitialRoutes?: Bindable<((navigator: upstream3.NavigatorState, initialRoute: string) => DartListInput<upstream2.Route<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>>)> | undefined; onGenerateRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null) | null> | undefined; onUnknownRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> | null) | null> | undefined; reportsRouteUpdateToEngine?: Bindable<boolean> | undefined; clipBehavior?: Bindable<upstream5.Clip> | undefined; observers?: Bindable<DartListInput<upstream6.NavigatorObserver, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [] }>>> | undefined; requestFocus?: Bindable<boolean> | undefined; restorationScopeId?: Bindable<string | null> | undefined; onDidRemovePage?: Bindable<((page: upstream1.Page<unknown | null>) => void) | null> | undefined } = {}): Navigator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Navigator", "", [{"name":"key","required":false,"positional":false},{"name":"pages","required":false,"positional":false},{"name":"onPopPage","required":false,"positional":false},{"name":"initialRoute","required":false,"positional":false},{"name":"onGenerateInitialRoutes","required":false,"positional":false},{"name":"onGenerateRoute","required":false,"positional":false},{"name":"onUnknownRoute","required":false,"positional":false},{"name":"reportsRouteUpdateToEngine","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"observers","required":false,"positional":false},{"name":"requestFocus","required":false,"positional":false},{"name":"restorationScopeId","required":false,"positional":false},{"name":"onDidRemovePage","required":false,"positional":false}], [], options) as Navigator;
}
export namespace _NavigatorFactory { export declare const defaultRouteName: string; }
Object.defineProperty(_NavigatorFactory, "defaultRouteName", { get: () => invokeTopLevel("flax.core/flutter#read:Navigator.defaultRouteName", []) });
export namespace _NavigatorFactory { function _flaxDefault_pushNamed<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined } = {}): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pushNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const pushNamed = _flaxDefineDartCallTypes(_flaxDefault_pushNamed, {"id":"flax.core/flutter#function:Navigator.pushNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_pushNamed, _FlaxSignature0>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePushNamed<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined } = {}): string {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePushNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments]);
return _flaxResult as string;
}
export const restorablePushNamed = _flaxDefineDartCallTypes(_flaxDefault_restorablePushNamed, {"id":"flax.core/flutter#function:Navigator.restorablePushNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePushNamed, _FlaxSignature1>;
}
export namespace _NavigatorFactory { function _flaxDefault_pushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined; result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pushReplacementNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments, options.result]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const pushReplacementNamed = _flaxDefineDartCallTypes(_flaxDefault_pushReplacementNamed, {"id":"flax.core/flutter#function:Navigator.pushReplacementNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_pushReplacementNamed, _FlaxSignature2>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePushReplacementNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined; result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): string {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePushReplacementNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments, options.result]);
return _flaxResult as string;
}
export const restorablePushReplacementNamed = _flaxDefineDartCallTypes(_flaxDefault_restorablePushReplacementNamed, {"id":"flax.core/flutter#function:Navigator.restorablePushReplacementNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePushReplacementNamed, _FlaxSignature3>;
}
export namespace _NavigatorFactory { function _flaxDefault_popAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined; result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.popAndPushNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments, options.result]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const popAndPushNamed = _flaxDefineDartCallTypes(_flaxDefault_popAndPushNamed, {"id":"flax.core/flutter#function:Navigator.popAndPushNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_popAndPushNamed, _FlaxSignature4>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePopAndPushNamed<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeName: string, options: { arguments?: unknown | null | undefined; result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): string {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePopAndPushNamed", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeName, options.arguments, options.result]);
return _flaxResult as string;
}
export const restorablePopAndPushNamed = _flaxDefineDartCallTypes(_flaxDefault_restorablePopAndPushNamed, {"id":"flax.core/flutter#function:Navigator.restorablePopAndPushNamed","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePopAndPushNamed, _FlaxSignature5>;
}
export namespace _NavigatorFactory { function _flaxDefault_pushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options: { arguments?: unknown | null | undefined } = {}): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pushNamedAndRemoveUntil", [contextHandle(context, "flax.core/flutter#type:BuildContext"), newRouteName, predicate, options.arguments]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const pushNamedAndRemoveUntil = _flaxDefineDartCallTypes(_flaxDefault_pushNamedAndRemoveUntil, {"id":"flax.core/flutter#function:Navigator.pushNamedAndRemoveUntil","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRouteName","required":true,"positional":true},{"name":"predicate","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_pushNamedAndRemoveUntil, _FlaxSignature6>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePushNamedAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteName: string, predicate: ((route: upstream2.Route<unknown | null>) => boolean), options: { arguments?: unknown | null | undefined } = {}): string {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePushNamedAndRemoveUntil", [contextHandle(context, "flax.core/flutter#type:BuildContext"), newRouteName, predicate, options.arguments]);
return _flaxResult as string;
}
export const restorablePushNamedAndRemoveUntil = _flaxDefineDartCallTypes(_flaxDefault_restorablePushNamedAndRemoveUntil, {"id":"flax.core/flutter#function:Navigator.restorablePushNamedAndRemoveUntil","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRouteName","required":true,"positional":true},{"name":"predicate","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePushNamedAndRemoveUntil, _FlaxSignature7>;
}
export namespace _NavigatorFactory { function _flaxDefault_push<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.push", [contextHandle(context, "flax.core/flutter#type:BuildContext"), route]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const push = _flaxDefineDartCallTypes(_flaxDefault_push, {"id":"flax.core/flutter#function:Navigator.push","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"route","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_push, _FlaxSignature8>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePush<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>), options: { arguments?: unknown | null | undefined } = {}): string {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePush", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeBuilder, options.arguments]);
return _flaxResult as string;
}
export const restorablePush = _flaxDefineDartCallTypes(_flaxDefault_restorablePush, {"id":"flax.core/flutter#function:Navigator.restorablePush","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeBuilder","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePush, _FlaxSignature9>;
}
export namespace _NavigatorFactory { function _flaxDefault_pushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>, options: { result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pushReplacement", [contextHandle(context, "flax.core/flutter#type:BuildContext"), newRoute, options.result]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const pushReplacement = _flaxDefineDartCallTypes(_flaxDefault_pushReplacement, {"id":"flax.core/flutter#function:Navigator.pushReplacement","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRoute","required":true,"positional":true},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_pushReplacement, _FlaxSignature10>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePushReplacement<T extends unknown | null = unknown | null, TO extends unknown | null = unknown | null>(context: upstream7.BuildContext, routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>), options: { arguments?: unknown | null | undefined; result?: (TO | _FlaxDartOutput<TO>) | null | undefined } = {}): string {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePushReplacement", [contextHandle(context, "flax.core/flutter#type:BuildContext"), routeBuilder, options.arguments, options.result]);
return _flaxResult as string;
}
export const restorablePushReplacement = _flaxDefineDartCallTypes(_flaxDefault_restorablePushReplacement, {"id":"flax.core/flutter#function:Navigator.restorablePushReplacement","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"routeBuilder","required":true,"positional":true},{"name":"arguments","required":false,"positional":false},{"name":"result","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePushReplacement, _FlaxSignature11>;
}
export namespace _NavigatorFactory { function _flaxDefault_pushAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>, predicate: ((route: upstream2.Route<unknown | null>) => boolean)): Promise<_FlaxDartOutput<T> | null> {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pushAndRemoveUntil", [contextHandle(context, "flax.core/flutter#type:BuildContext"), newRoute, predicate]);
return _flaxResult as Promise<_FlaxDartOutput<T> | null>;
}
export const pushAndRemoveUntil = _flaxDefineDartCallTypes(_flaxDefault_pushAndRemoveUntil, {"id":"flax.core/flutter#function:Navigator.pushAndRemoveUntil","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRoute","required":true,"positional":true},{"name":"predicate","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_pushAndRemoveUntil, _FlaxSignature12>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorablePushAndRemoveUntil<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>), predicate: ((route: upstream2.Route<unknown | null>) => boolean), options: { arguments?: unknown | null | undefined } = {}): string {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorablePushAndRemoveUntil", [contextHandle(context, "flax.core/flutter#type:BuildContext"), newRouteBuilder, predicate, options.arguments]);
return _flaxResult as string;
}
export const restorablePushAndRemoveUntil = _flaxDefineDartCallTypes(_flaxDefault_restorablePushAndRemoveUntil, {"id":"flax.core/flutter#function:Navigator.restorablePushAndRemoveUntil","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRouteBuilder","required":true,"positional":true},{"name":"predicate","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorablePushAndRemoveUntil, _FlaxSignature13>;
}
export namespace _NavigatorFactory { function _flaxDefault_replace<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: { newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>; oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> }): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["newRoute","oldRoute"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.replace", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.newRoute, options.oldRoute]);
}
export const replace = _flaxDefineDartCallTypes(_flaxDefault_replace, {"id":"flax.core/flutter#function:Navigator.replace","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"newRoute","required":true,"positional":false},{"name":"oldRoute","required":true,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_replace, _FlaxSignature14>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorableReplace<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: { arguments?: unknown | null | undefined; newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>); oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }> }): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments","newRouteBuilder","oldRoute"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorableReplace", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.arguments, options.newRouteBuilder, options.oldRoute]);
return _flaxResult as string;
}
export const restorableReplace = _flaxDefineDartCallTypes(_flaxDefault_restorableReplace, {"id":"flax.core/flutter#function:Navigator.restorableReplace","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"arguments","required":false,"positional":false},{"name":"newRouteBuilder","required":true,"positional":false},{"name":"oldRoute","required":true,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorableReplace, _FlaxSignature15>;
}
export namespace _NavigatorFactory { function _flaxDefault_replaceRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: { anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>; newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }> }): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["anchorRoute","newRoute"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.replaceRouteBelow", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.anchorRoute, options.newRoute]);
}
export const replaceRouteBelow = _flaxDefineDartCallTypes(_flaxDefault_replaceRouteBelow, {"id":"flax.core/flutter#function:Navigator.replaceRouteBelow","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"anchorRoute","required":true,"positional":false},{"name":"newRoute","required":true,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_replaceRouteBelow, _FlaxSignature16>;
}
export namespace _NavigatorFactory { function _flaxDefault_restorableReplaceRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, options: { anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>; arguments?: unknown | null | undefined; newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>) }): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["anchorRoute","arguments","newRouteBuilder"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.restorableReplaceRouteBelow", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.anchorRoute, options.arguments, options.newRouteBuilder]);
return _flaxResult as string;
}
export const restorableReplaceRouteBelow = _flaxDefineDartCallTypes(_flaxDefault_restorableReplaceRouteBelow, {"id":"flax.core/flutter#function:Navigator.restorableReplaceRouteBelow","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"anchorRoute","required":true,"positional":false},{"name":"arguments","required":false,"positional":false},{"name":"newRouteBuilder","required":true,"positional":false}]}) as _FlaxDartCallable<typeof _flaxDefault_restorableReplaceRouteBelow, _FlaxSignature17>;
}
export namespace _NavigatorFactory { export function canPop(context: upstream7.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.canPop", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _NavigatorFactory { function _flaxDefault_maybePop<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, result?: (T | _FlaxDartOutput<T>) | null): Promise<boolean> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.maybePop", [contextHandle(context, "flax.core/flutter#type:BuildContext"), result]);
return _flaxResult as Promise<boolean>;
}
export const maybePop = _flaxDefineDartCallTypes(_flaxDefault_maybePop, {"id":"flax.core/flutter#function:Navigator.maybePop","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"result","required":false,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_maybePop, _FlaxSignature18>;
}
export namespace _NavigatorFactory { function _flaxDefault_pop<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, result?: (T | _FlaxDartOutput<T>) | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.pop", [contextHandle(context, "flax.core/flutter#type:BuildContext"), result]);
}
export const pop = _flaxDefineDartCallTypes(_flaxDefault_pop, {"id":"flax.core/flutter#function:Navigator.pop","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"result","required":false,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_pop, _FlaxSignature19>;
}
export namespace _NavigatorFactory { export function popUntil(context: upstream7.BuildContext, predicate: ((route: upstream2.Route<unknown | null>) => boolean)): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.popUntil", [contextHandle(context, "flax.core/flutter#type:BuildContext"), predicate]);
} }
export namespace _NavigatorFactory { function _flaxDefault_popUntilWithResult<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, predicate: ((route: upstream2.Route<unknown | null>) => boolean), result: (T | _FlaxDartOutput<T>) | null): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.popUntilWithResult", [contextHandle(context, "flax.core/flutter#type:BuildContext"), predicate, result]);
}
export const popUntilWithResult = _flaxDefineDartCallTypes(_flaxDefault_popUntilWithResult, {"id":"flax.core/flutter#function:Navigator.popUntilWithResult","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"predicate","required":true,"positional":true},{"name":"result","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_popUntilWithResult, _FlaxSignature20>;
}
export namespace _NavigatorFactory { function _flaxDefault_removeRoute<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>, result?: (T | _FlaxDartOutput<T>) | null): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.removeRoute", [contextHandle(context, "flax.core/flutter#type:BuildContext"), route, result]);
}
export const removeRoute = _flaxDefineDartCallTypes(_flaxDefault_removeRoute, {"id":"flax.core/flutter#function:Navigator.removeRoute","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"route","required":true,"positional":true},{"name":"result","required":false,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_removeRoute, _FlaxSignature21>;
}
export namespace _NavigatorFactory { function _flaxDefault_removeRouteBelow<T extends unknown | null = unknown | null>(context: upstream7.BuildContext, anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>] }>, result?: (T | _FlaxDartOutput<T>) | null): void {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.removeRouteBelow", [contextHandle(context, "flax.core/flutter#type:BuildContext"), anchorRoute, result]);
}
export const removeRouteBelow = _flaxDefineDartCallTypes(_flaxDefault_removeRouteBelow, {"id":"flax.core/flutter#function:Navigator.removeRouteBelow","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"anchorRoute","required":true,"positional":true},{"name":"result","required":false,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_removeRouteBelow, _FlaxSignature22>;
}
export namespace _NavigatorFactory { export function of(context: upstream7.BuildContext, options: { rootNavigator?: boolean | undefined } = {}): upstream3.NavigatorState {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["rootNavigator"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.rootNavigator]);
return _flaxResult as upstream3.NavigatorState;
} }
export namespace _NavigatorFactory { export function maybeOf(context: upstream7.BuildContext, options: { rootNavigator?: boolean | undefined } = {}): upstream3.NavigatorState | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["rootNavigator"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.rootNavigator]);
return _flaxResult as upstream3.NavigatorState | null;
} }
export namespace _NavigatorFactory { export function defaultGenerateInitialRoutes(navigator: upstream3.NavigatorState, initialRouteName: string): DartList<upstream2.Route<unknown | null>> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Navigator.defaultGenerateInitialRoutes", [navigator, initialRouteName]);
return _flaxResult as DartList<upstream2.Route<unknown | null>>;
} }
export const Navigator: typeof _NavigatorFactory & _FlaxInstanceType<Navigator> & _FlaxDartType<Navigator, readonly ["class", "flax.core/flutter#type:Navigator", readonly [], false]> = _flaxBindInstanceType<Navigator, typeof _NavigatorFactory>(_NavigatorFactory, "flax.core/flutter#type:Navigator", ["flax.core/components#type:StatefulWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _NavigatorFactory & _FlaxInstanceType<Navigator> & _FlaxDartType<Navigator, readonly ["class", "flax.core/flutter#type:Navigator", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined}) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined}) => string : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined;result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => Promise<_Selected0 | null> : never : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined;result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => string : never : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined;result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => Promise<_Selected0 | null> : never : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,routeName: string,options?: {arguments?: unknown | null | undefined;result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => string : never : never : never; }
interface _FlaxSignature6 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,newRouteName: string,predicate: ((route: upstream2.Route<unknown | null>) => boolean),options?: {arguments?: unknown | null | undefined}) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature7 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,newRouteName: string,predicate: ((route: upstream2.Route<unknown | null>) => boolean),options?: {arguments?: unknown | null | undefined}) => string : never : never; }
interface _FlaxSignature8 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature9 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>),options?: {arguments?: unknown | null | undefined}) => string : never : never; }
interface _FlaxSignature10 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>,options?: {result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => Promise<_Selected0 | null> : never : never : never; }
interface _FlaxSignature11 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? (context: upstream7.BuildContext,routeBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>),options?: {arguments?: unknown | null | undefined;result?: (_Selected1 | DartInput<_Selected1>) | null | undefined}) => string : never : never : never; }
interface _FlaxSignature12 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>,predicate: ((route: upstream2.Route<unknown | null>) => boolean)) => Promise<_Selected0 | null> : never : never; }
interface _FlaxSignature13 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>),predicate: ((route: upstream2.Route<unknown | null>) => boolean),options?: {arguments?: unknown | null | undefined}) => string : never : never; }
interface _FlaxSignature14 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,options: {newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>;oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>}) => void : never : never; }
interface _FlaxSignature15 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,options: {arguments?: unknown | null | undefined;newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>);oldRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>}) => string : never : never; }
interface _FlaxSignature16 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,options: {anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>;newRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>}) => void : never : never; }
interface _FlaxSignature17 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,options: {anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null] }>;arguments?: unknown | null | undefined;newRouteBuilder: ((context: upstream7.BuildContext, _flaxArg_617267756d656e7473: unknown | null) => Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>)}) => string : never : never; }
interface _FlaxSignature18 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,result?: (_Selected0 | DartInput<_Selected0>) | null) => Promise<boolean> : never : never; }
interface _FlaxSignature19 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never; }
interface _FlaxSignature20 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,predicate: ((route: upstream2.Route<unknown | null>) => boolean),result: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never; }
interface _FlaxSignature21 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,route: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>,result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never; }
interface _FlaxSignature22 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext,anchorRoute: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_Selected0] }>,result?: (_Selected0 | DartInput<_Selected0>) | null) => void : never : never; }
