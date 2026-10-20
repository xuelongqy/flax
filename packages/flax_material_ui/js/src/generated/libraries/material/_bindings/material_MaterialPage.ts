// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Page';
import '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters2, _flaxMemberParameters166, _flaxMemberParameters9 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPage<T extends unknown | null = unknown | null> extends Omit<upstream0.Page<T>, _flaxOwnMembers0>, Omit<upstream1.RouteSettings, _flaxOwnMembers0 | keyof upstream0.Page<T>>, Readonly<{ "__flaxBound:package:material_ui/src/page.dart::MaterialPage": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [] }> { readonly __MaterialPage: unique symbol;
readonly [_flaxDartTypeValue]: MaterialPage<T>;

readonly name: string | null;
readonly arguments: unknown | null;
readonly key: upstream2.LocalKey | null;
readonly restorationId: string | null;
readonly onPopInvoked: ((didPop: boolean, result: (T | DartInput<T>) | null) => void);
readonly canPop: boolean;
readonly child: Widget;
readonly maintainState: boolean;
readonly fullscreenDialog: boolean;
readonly allowSnapshotting: boolean;
toString(): string;
canUpdate(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [] }>): boolean;
createRoute(context: upstream4.BuildContext): upstream3.Route<T>;
}
defineObject("flax.material/material#type:MaterialPage", ["name","arguments","key","restorationId","onPopInvoked","canPop","child","maintainState","fullscreenDialog","allowSnapshotting"], [], _flaxBindingMethods("flax.material/material#type:MaterialPage", "object", {"toString":_flaxMemberParameters2,"canUpdate":_flaxMemberParameters166,"createRoute":_flaxMemberParameters9}, {}), []);
export function _MaterialPageFactory<T extends unknown | null = unknown | null>(options: { child: Widget; maintainState?: boolean | undefined; fullscreenDialog?: boolean | undefined; allowSnapshotting?: boolean | undefined; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; canPop?: boolean | undefined; onPopInvoked?: ((didPop: boolean, result: _FlaxDartOutput<T> | null) => void) | undefined; name?: string | null | undefined; arguments?: unknown | null | undefined; restorationId?: string | null | undefined }): MaterialPage<T>;
export function _MaterialPageFactory(options: { child: Widget; maintainState?: boolean | undefined; fullscreenDialog?: boolean | undefined; allowSnapshotting?: boolean | undefined; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; canPop?: boolean | undefined; onPopInvoked?: ((didPop: boolean, result: unknown | null) => void) | undefined; name?: string | null | undefined; arguments?: unknown | null | undefined; restorationId?: string | null | undefined }): MaterialPage<unknown | null>;
export function _MaterialPageFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MaterialPage", "", [{"name":"child","required":true},{"name":"maintainState"},{"name":"fullscreenDialog"},{"name":"allowSnapshotting"},{"name":"key"},{"name":"canPop"},{"name":"onPopInvoked"},{"name":"name"},{"name":"arguments"},{"name":"restorationId"}], [], options) as MaterialPage<unknown | null>;
}
export const MaterialPage: typeof _MaterialPageFactory & _FlaxInstanceType<MaterialPage<unknown | null>> & _FlaxDartType<MaterialPage<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPage", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<MaterialPage<unknown | null>, typeof _MaterialPageFactory>(_MaterialPageFactory, "flax.material/material#type:MaterialPage", ["flax.core/flutter#type:Page","flax.core/flutter#type:RouteSettings","dart:core::Object"]) as typeof _MaterialPageFactory & _FlaxInstanceType<MaterialPage<unknown | null>> & _FlaxDartType<MaterialPage<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPage", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(MaterialPage, "flax.material/material#type:MaterialPage", {"category":"object","constructors":{"":[{"name":"child","required":true,"positional":false},{"name":"maintainState","required":false,"positional":false},{"name":"fullscreenDialog","required":false,"positional":false},{"name":"allowSnapshotting","required":false,"positional":false},{"name":"key","required":false,"positional":false},{"name":"canPop","required":false,"positional":false},{"name":"onPopInvoked","required":false,"positional":false},{"name":"name","required":false,"positional":false},{"name":"arguments","required":false,"positional":false},{"name":"restorationId","required":false,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "arguments" | "key" | "restorationId" | "onPopInvoked" | "canPop" | "child" | "maintainState" | "fullscreenDialog" | "allowSnapshotting" | "toString" | "canUpdate" | "createRoute" | "__flaxBound:package:material_ui/src/page.dart::MaterialPage" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Page" | "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(options: {child: Widget;maintainState?: boolean | undefined;fullscreenDialog?: boolean | undefined;allowSnapshotting?: boolean | undefined;key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;canPop?: boolean | undefined;onPopInvoked?: ((didPop: boolean, result: _Selected0 | null) => void) | undefined;name?: string | null | undefined;arguments?: unknown | null | undefined;restorationId?: string | null | undefined}): MaterialPage<_Selected0>;readonly prototype: MaterialPage<_Selected0>;} & _FlaxInstanceType<MaterialPage<_Selected0>> & _FlaxDartType<MaterialPage<_Selected0>> : never : never; }
