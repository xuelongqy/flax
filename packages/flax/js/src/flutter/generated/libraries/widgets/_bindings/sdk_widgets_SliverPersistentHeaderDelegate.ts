// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_FloatingHeaderSnapConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_FloatingHeaderSnapConfiguration';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_OverScrollHeaderStretchConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OverScrollHeaderStretchConfiguration';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_PersistentHeaderShowOnScreenConfiguration';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PersistentHeaderShowOnScreenConfiguration';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters441, _flaxMemberParameters43, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverPersistentHeaderDelegate extends Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_persistent_header.dart::SliverPersistentHeaderDelegate": readonly [] }> { readonly __SliverPersistentHeaderDelegate: unique symbol;
readonly [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;

}
defineObject("flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", ["minExtent","maxExtent","vsync","snapConfiguration","stretchConfiguration","showOnScreenConfiguration"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", "object", {"build":_flaxMemberParameters441,"shouldRebuild":_flaxMemberParameters43}, {}), []);
const _SliverPersistentHeaderDelegateProxy = {type: "flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"build":_flaxMemberParameters441,"shouldRebuild":_flaxMemberParameters43}, getters: ["minExtent","maxExtent","vsync","snapConfiguration","stretchConfiguration","showOnScreenConfiguration"], setters: [], contextMembers: [], superMembers: ["get:vsync","get:snapConfiguration","get:stretchConfiguration","get:showOnScreenConfiguration"]} as const;
export interface SliverPersistentHeaderDelegate {
readonly [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;

get vsync(): upstream0.TickerProvider | null;
get snapConfiguration(): upstream1.FloatingHeaderSnapConfiguration | null;
get stretchConfiguration(): upstream2.OverScrollHeaderStretchConfiguration | null;
get showOnScreenConfiguration(): upstream3.PersistentHeaderShowOnScreenConfiguration | null;
}
export abstract class SliverPersistentHeaderDelegate extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliverPersistentHeaderDelegate>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SliverPersistentHeaderDelegate;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", readonly [], false];
constructor() { super(_SliverPersistentHeaderDelegateProxy, Array.from(arguments)); }
abstract build(context: upstream4.BuildContext, shrinkOffset: number, overlapsContent: boolean): Widget;
abstract shouldRebuild(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_persistent_header.dart::SliverPersistentHeaderDelegate": readonly [] }>): boolean;
abstract get minExtent(): number;
abstract get maxExtent(): number;
}
_flaxDefineProxyBase(SliverPersistentHeaderDelegate.prototype, _SliverPersistentHeaderDelegateProxy);
export namespace SliverPersistentHeaderDelegate { export function implement(args: [], implementation: {build: ((context: upstream4.BuildContext, shrinkOffset: number, overlapsContent: boolean) => Widget); shouldRebuild: ((oldDelegate: SliverPersistentHeaderDelegate) => boolean); get minExtent(): number; get maxExtent(): number}): SliverPersistentHeaderDelegate {
return constructProxy(_SliverPersistentHeaderDelegateProxy, args, implementation) as SliverPersistentHeaderDelegate; } }
_flaxBindInstanceType<SliverPersistentHeaderDelegate, typeof SliverPersistentHeaderDelegate>(SliverPersistentHeaderDelegate, "flax.core/sdk_widgets#type:SliverPersistentHeaderDelegate", ["dart:core::Object"]);
