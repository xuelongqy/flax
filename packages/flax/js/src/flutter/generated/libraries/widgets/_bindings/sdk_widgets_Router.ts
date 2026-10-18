// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Router<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::Router": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Router: unique symbol;
readonly [_flaxDartTypeValue]: Router<T>;

readonly routeInformationProvider: upstream2.RouteInformationProvider | null;
readonly routeInformationParser: upstream3.RouteInformationParser<T> | null;
readonly routerDelegate: upstream4.RouterDelegate<T>;
readonly backButtonDispatcher: upstream5.BackButtonDispatcher | null;
readonly restorationScopeId: string | null;
readonly key: upstream1.Key | null;
createState(): upstream8.State<Router<T>>;
createElement(): upstream9.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Router", ["routeInformationProvider","routeInformationParser","routerDelegate","backButtonDispatcher","restorationScopeId","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Router", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _RouterFactory<T extends unknown | null = unknown | null>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; routeInformationProvider?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream14.RouteInformation] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; routeInformationParser?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [_FlaxDartOutput<T>] }> | null | undefined; routerDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [_FlaxDartOutput<T>] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; backButtonDispatcher?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> | null | undefined; restorationScopeId?: string | null | undefined }): Router<T>;
export function _RouterFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; routeInformationProvider?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream14.RouteInformation] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; routeInformationParser?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [unknown | null] }> | null | undefined; routerDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; backButtonDispatcher?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> | null | undefined; restorationScopeId?: string | null | undefined }): Router<unknown | null>;
export function _RouterFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Router", "", [{"name":"key","required":false,"positional":false},{"name":"routeInformationProvider","required":false,"positional":false},{"name":"routeInformationParser","required":false,"positional":false},{"name":"routerDelegate","required":true,"positional":false},{"name":"backButtonDispatcher","required":false,"positional":false},{"name":"restorationScopeId","required":false,"positional":false}], [], options) as Router<unknown | null>;
}
export namespace _RouterFactory {
export function withConfig<T extends unknown | null = unknown | null>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; config: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [_FlaxDartOutput<T>] }>; restorationScopeId?: string | null | undefined }): Router<T>;
export function withConfig(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; config: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [unknown | null] }>; restorationScopeId?: string | null | undefined }): Router<unknown | null>;
export function withConfig(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Router", "withConfig", [{"name":"key","required":false,"positional":false},{"name":"config","required":true,"positional":false},{"name":"restorationScopeId","required":false,"positional":false}], [], options) as Router<unknown | null>;
}
}
export namespace _RouterFactory { function _flaxDefault_of<T extends unknown | null = unknown | null>(context: upstream7.BuildContext): Router<_FlaxDartOutput<T>> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Router.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as Router<_FlaxDartOutput<T>>;
}
export const of = _flaxDefineDartCallTypes(_flaxDefault_of, {"id":"flax.core/sdk_widgets#function:Router.of","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_of, _FlaxSignature1>;
}
export namespace _RouterFactory { function _flaxDefault_maybeOf<T extends unknown | null = unknown | null>(context: upstream7.BuildContext): Router<_FlaxDartOutput<T>> | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Router.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as Router<_FlaxDartOutput<T>> | null;
}
export const maybeOf = _flaxDefineDartCallTypes(_flaxDefault_maybeOf, {"id":"flax.core/sdk_widgets#function:Router.maybeOf","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_maybeOf, _FlaxSignature2>;
}
export namespace _RouterFactory { export function navigate(context: upstream7.BuildContext, callback: (() => void)): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Router.navigate", [contextHandle(context, "flax.core/flutter#type:BuildContext"), callback]);
} }
export namespace _RouterFactory { export function neglect(context: upstream7.BuildContext, callback: (() => void)): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Router.neglect", [contextHandle(context, "flax.core/flutter#type:BuildContext"), callback]);
} }
export const Router: typeof _RouterFactory & _FlaxInstanceType<Router<unknown | null>> & _FlaxDartType<Router<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:Router", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Router<unknown | null>, typeof _RouterFactory>(_RouterFactory, "flax.core/sdk_widgets#type:Router", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RouterFactory & _FlaxInstanceType<Router<unknown | null>> & _FlaxDartType<Router<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:Router", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Router, "flax.core/sdk_widgets#type:Router", {"category":"object","constructors":{"":[{"name":"key","required":false,"positional":false},{"name":"routeInformationProvider","required":false,"positional":false},{"name":"routeInformationParser","required":false,"positional":false},{"name":"routerDelegate","required":true,"positional":false},{"name":"backButtonDispatcher","required":false,"positional":false},{"name":"restorationScopeId","required":false,"positional":false}],"withConfig":[{"name":"key","required":false,"positional":false},{"name":"config","required":true,"positional":false},{"name":"restorationScopeId","required":false,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "routeInformationProvider" | "routeInformationParser" | "routerDelegate" | "backButtonDispatcher" | "restorationScopeId" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/router.dart::Router" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;routeInformationProvider?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream14.RouteInformation] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined;routeInformationParser?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [_Selected0] }> | null | undefined;routerDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [_Selected0] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>;backButtonDispatcher?: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>] }> | null | undefined;restorationScopeId?: string | null | undefined}): Router<_Selected0>;withConfig: (options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;config: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [_Selected0] }>;restorationScopeId?: string | null | undefined})=> Router<_Selected0>;readonly prototype: Router<_Selected0>;} & _FlaxInstanceType<Router<_Selected0>> & _FlaxDartType<Router<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext) => Router<_Selected0> : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream7.BuildContext) => Router<_Selected0> | null : never : never; }
