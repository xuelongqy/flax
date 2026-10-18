// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Page<T extends unknown | null = unknown | null> extends Omit<upstream0.RouteSettings, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [] }> { readonly __Page: unique symbol;
readonly [_flaxDartTypeValue]: Page<T>;

readonly name: string | null;
readonly arguments: unknown | null;
readonly key: upstream1.LocalKey | null;
readonly restorationId: string | null;
readonly onPopInvoked: ((didPop: boolean, result: (T | DartInput<T>) | null) => void);
readonly canPop: boolean;
toString(): string;
canUpdate(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [] }>): boolean;
createRoute(context: upstream3.BuildContext): upstream2.Route<T>;
}
defineObject("flax.core/flutter#type:Page", ["name","arguments","key","restorationId","onPopInvoked","canPop"], [], _flaxBindingMethods("flax.core/flutter#type:Page", "object", {"toString":_flaxMemberParameters0,"canUpdate":_flaxMemberParameters1,"createRoute":_flaxMemberParameters2}, {}), []);
export const Page: object & _FlaxInstanceType<Page<unknown | null>> & _FlaxDartType<Page<unknown | null>, readonly ["class", "flax.core/flutter#type:Page", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<Page<unknown | null>, object>({}, "flax.core/flutter#type:Page", ["flax.core/flutter#type:RouteSettings","dart:core::Object"]) as object & _FlaxInstanceType<Page<unknown | null>> & _FlaxDartType<Page<unknown | null>, readonly ["class", "flax.core/flutter#type:Page", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(Page, "flax.core/flutter#type:Page", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "arguments" | "key" | "restorationId" | "onPopInvoked" | "canPop" | "toString" | "canUpdate" | "createRoute" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Page" | "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: Page<_Selected0>;} & _FlaxInstanceType<Page<_Selected0>> & _FlaxDartType<Page<_Selected0>> : never : never; }
