// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import { _flaxMemberParameters247 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MagnifierDecoration extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierDecoration": readonly [] }> { readonly __MagnifierDecoration: unique symbol;
readonly [_flaxDartTypeValue]: MagnifierDecoration;

readonly opacity: number;
readonly shadows: DartList<upstream0.BoxShadow> | null;
readonly shape: upstream1.ShapeBorder;
}
defineObject("flax.core/sdk_widgets#type:MagnifierDecoration", ["opacity","shadows","shape"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MagnifierDecoration", "object", {}, {}), []);
export function _MagnifierDecorationFactory(options: { opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined } = {}): MagnifierDecoration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MagnifierDecoration", "", [{"name":"opacity"},{"name":"shadows"},{"name":"shape"}], [], options) as MagnifierDecoration;
}
const _MagnifierDecorationProxy = {type: "flax.core/sdk_widgets#type:MagnifierDecoration", parameters: _flaxMemberParameters247, constructors: {"": _flaxMemberParameters247}, methods: {}, getters: ["opacity","shadows","shape"], setters: [], contextMembers: [], superMembers: ["get:opacity","get:shadows","get:shape"]} as const;
export interface _MagnifierDecorationNative extends MagnifierDecoration {
readonly [_flaxDartTypeValue]: _MagnifierDecorationNative;

get opacity(): number;
get shadows(): DartList<upstream0.BoxShadow> | null;
get shape(): upstream1.ShapeBorder;
}
export abstract class _MagnifierDecorationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierDecoration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MagnifierDecoration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false];
constructor(options?: {opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined}) { super(_MagnifierDecorationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_MagnifierDecorationNative.prototype, _MagnifierDecorationProxy);
export namespace _MagnifierDecorationFactory { export function implement(args: [options?: {opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined}], implementation: {}): MagnifierDecoration {
return constructProxy(_MagnifierDecorationProxy, args, implementation) as MagnifierDecoration; } }
const _MagnifierDecorationBinding = _flaxProxyFactory(_MagnifierDecorationFactory, _MagnifierDecorationNative) as unknown as typeof _MagnifierDecorationFactory & (new(options?: {opacity?: number | undefined; shadows?: DartListInput<upstream0.BoxShadow, Readonly<{ "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | undefined}) => _MagnifierDecorationNative);
export const MagnifierDecoration: typeof _MagnifierDecorationBinding & _FlaxInstanceType<MagnifierDecoration> & _FlaxDartType<MagnifierDecoration, readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false]> = _flaxBindInstanceType<MagnifierDecoration, typeof _MagnifierDecorationBinding>(_MagnifierDecorationBinding, "flax.core/sdk_widgets#type:MagnifierDecoration", ["dart:core::Object"]) as typeof _MagnifierDecorationBinding & _FlaxInstanceType<MagnifierDecoration> & _FlaxDartType<MagnifierDecoration, readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false]>;
