// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
const _flaxMemberParameters0 = [{"name":"opacity"},{"name":"shadows"},{"name":"shape"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MagnifierDecoration extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierDecoration": readonly [] }> { readonly __MagnifierDecoration: unique symbol;
readonly [_flaxDartTypeValue]: MagnifierDecoration;

}
defineObject("flax.core/sdk_widgets#type:MagnifierDecoration", ["opacity","shadows","shape"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MagnifierDecoration", "object", {}, {}), []);
const _MagnifierDecorationProxy = {type: "flax.core/sdk_widgets#type:MagnifierDecoration", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["opacity","shadows","shape"], setters: [], contextMembers: [], superMembers: ["get:opacity","get:shadows","get:shape"]} as const;
export interface MagnifierDecoration {
readonly [_flaxDartTypeValue]: MagnifierDecoration;

get opacity(): number;
get shadows(): DartList<upstream0.BoxShadow> | null;
get shape(): upstream1.ShapeBorder;
}
export abstract class MagnifierDecoration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MagnifierDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false];
constructor(options?: {opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined}) { super(_MagnifierDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MagnifierDecoration.prototype, _MagnifierDecorationProxy);
export namespace MagnifierDecoration { export function implement(args: [options?: {opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined}], implementation: {}): MagnifierDecoration {
return constructProxy(_MagnifierDecorationProxy, args, implementation) as MagnifierDecoration; } }
_flaxBindInstanceType<MagnifierDecoration, typeof MagnifierDecoration>(MagnifierDecoration, "flax.core/sdk_widgets#type:MagnifierDecoration", ["dart:core::Object"]);
