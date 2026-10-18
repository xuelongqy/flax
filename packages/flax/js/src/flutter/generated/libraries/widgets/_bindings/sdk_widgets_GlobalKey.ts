// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayState';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableListState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawGestureDetectorState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawGestureDetectorState';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlobalKey<T extends upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream0.State<upstream1.StatefulWidget>> extends Omit<upstream2.Key, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> { readonly __GlobalKey: unique symbol;
readonly [_flaxDartTypeValue]: GlobalKey<T>;

}
defineObject("flax.core/sdk_widgets#type:GlobalKey", ["currentContext","currentWidget","currentState"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:GlobalKey", "object", {}, {}), []);
const _GlobalKeyProxy = {type: "flax.core/sdk_widgets#type:GlobalKey", parameters: [], constructors: {"constructor":[]}, methods: {}, getters: ["currentContext","currentWidget","currentState"], setters: [], contextMembers: [], superMembers: ["get:currentContext","get:currentWidget","get:currentState"]} as const;
export interface GlobalKey<T extends upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream0.State<upstream1.StatefulWidget>> {
readonly [_flaxDartTypeValue]: GlobalKey<T>;

get currentContext(): upstream9.BuildContext | null;
get currentWidget(): Widget | null;
get currentState(): T | null;
}
export abstract class GlobalKey<T extends upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream0.State<upstream1.StatefulWidget>> extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalKey<upstream0.State<upstream1.StatefulWidget>>>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: GlobalKey<upstream0.State<upstream1.StatefulWidget>>;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:GlobalKey", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false];
static declare $type: _FlaxDartTypeCases<unknown>['$type'];
static declare [_flaxDartTypeCases]: _FlaxSignature1;
constructor() { super(_GlobalKeyProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(GlobalKey.prototype, _GlobalKeyProxy);
export namespace GlobalKey { export function implement<T extends upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream0.State<upstream1.StatefulWidget>>(args: [], implementation: {}): GlobalKey<T> {
return constructProxy(_GlobalKeyProxy, args, implementation) as GlobalKey<T>; } }
_flaxBindInstanceType<GlobalKey<upstream0.State<upstream1.StatefulWidget>>, typeof GlobalKey>(GlobalKey, "flax.core/sdk_widgets#type:GlobalKey", ["flax.core/flutter#type:Key","dart:core::Object"]);
_flaxDefineDartTypes(GlobalKey, "flax.core/sdk_widgets#type:GlobalKey", {...{"category":"object","constructors":{}}, proxy: _GlobalKeyProxy});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentContext" | "currentWidget" | "currentState" | "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? (abstract new () => GlobalKey<_Selected0>) & {readonly prototype: GlobalKey<_Selected0>;implement(args: readonly [], implementation: Partial<GlobalKey<_Selected0>>): GlobalKey<_Selected0>;} & _FlaxInstanceType<GlobalKey<_Selected0>> & _FlaxDartType<GlobalKey<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? (abstract new () => GlobalKey<_Selected0>) & {readonly prototype: GlobalKey<_Selected0>;implement(args: readonly [], implementation: Partial<GlobalKey<_Selected0>>): GlobalKey<_Selected0>;} & _FlaxInstanceType<GlobalKey<_Selected0>> & _FlaxDartType<GlobalKey<_Selected0>> : never : never; }
