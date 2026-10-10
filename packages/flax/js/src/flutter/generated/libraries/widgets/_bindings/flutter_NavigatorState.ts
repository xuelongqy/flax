// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"route","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"routeName","required":true,"positional":true},{"name":"arguments","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"newRoute","required":true,"positional":true},{"name":"result","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"result","required":false,"positional":true}] as const;
const _flaxMemberParameters4 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface NavigatorState { readonly __NavigatorState: unique symbol;
readonly mounted: boolean;
push<T extends NavigationData | null = NavigationData | null>(route: upstream0.Route<T>): Promise<T | null>;
pushNamed<T extends NavigationData | null = NavigationData | null>(routeName: string, options?: {arguments?: NavigationData | null | undefined}): Promise<T | null>;
pushReplacement<T extends NavigationData | null = NavigationData | null, TO extends NavigationData | null = NavigationData | null>(newRoute: upstream0.Route<T>, options?: {result?: TO | null | undefined}): Promise<T | null>;
pop<T extends NavigationData | null = NavigationData | null>(result?: T | null): void;
maybePop<T extends NavigationData | null = NavigationData | null>(result?: T | null): Promise<boolean>;
canPop(): boolean;
}
defineState("flax.core/flutter#type:NavigatorState", ["mounted"], _flaxBindingMethods("flax.core/flutter#type:NavigatorState", "state", {"push":_flaxMemberParameters0,"pushNamed":_flaxMemberParameters1,"pushReplacement":_flaxMemberParameters2,"pop":_flaxMemberParameters3,"maybePop":_flaxMemberParameters3,"canPop":_flaxMemberParameters4}));
export const NavigatorState: object & _FlaxInstanceType<NavigatorState> = _flaxBindInstanceType<NavigatorState, object>({}, "flax.core/flutter#type:NavigatorState", ["flax.core/components#type:State","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin","flax.core/flutter#type:TickerProvider","package:flutter/src/widgets/restoration.dart::RestorationMixin"]);
