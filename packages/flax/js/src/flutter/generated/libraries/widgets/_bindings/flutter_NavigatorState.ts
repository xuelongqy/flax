// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface NavigatorState { readonly __NavigatorState: unique symbol;
readonly mounted: boolean;
push<T extends NavigationData | null = NavigationData | null>(route: upstream0.Route<T>): Promise<T | null>;
pushNamed<T extends NavigationData | null = NavigationData | null>(routeName: string, options?: {arguments?: NavigationData | null | undefined}): Promise<T | null>;
pushReplacement<T extends NavigationData | null = NavigationData | null, TO extends NavigationData | null = NavigationData | null>(newRoute: upstream0.Route<T>, options?: {result?: TO | null | undefined}): Promise<T | null>;
pop<T extends NavigationData | null = NavigationData | null>(result?: T | null): void;
maybePop<T extends NavigationData | null = NavigationData | null>(result?: T | null): Promise<boolean>;
canPop(): boolean;
}
defineState("flax.core/flutter#type:NavigatorState", ["mounted"], {push(this: object, route: upstream0.Route<unknown | null>): Promise<NavigationData | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "push", [route]);
return _flaxResult as Promise<NavigationData | null>;
},
pushNamed(this: object, routeName: string, options: { arguments?: NavigationData | null | undefined } = {}): Promise<NavigationData | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pushNamed", [routeName, options.arguments]);
return _flaxResult as Promise<NavigationData | null>;
},
pushReplacement(this: object, newRoute: upstream0.Route<unknown | null>, options: { result?: NavigationData | null | undefined } = {}): Promise<NavigationData | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pushReplacement", [newRoute, options.result]);
return _flaxResult as Promise<NavigationData | null>;
},
pop(this: object, result?: NavigationData | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pop", [result]);
},
maybePop(this: object, result?: NavigationData | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "maybePop", [result]);
return _flaxResult as Promise<boolean>;
},
canPop(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "canPop", []);
return _flaxResult as boolean;
},
});
