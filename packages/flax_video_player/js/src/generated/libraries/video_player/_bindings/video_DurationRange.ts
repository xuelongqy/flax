// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters3 } from "@flax/video-player/_bindings/video.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/video-player/_bindings/video.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DurationRange extends Readonly<{ "__flaxBound:package:video_player_platform_interface/video_player_platform_interface.dart::DurationRange": readonly [] }> { readonly __DurationRange: unique symbol;
readonly [_flaxDartTypeValue]: DurationRange;

readonly start: upstream0.Duration;
readonly end: upstream0.Duration;
startFraction(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>): number;
endFraction(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>): number;
toString(): string;
}
defineObject("flax.video/video#type:DurationRange", ["start","end"], [], _flaxBindingMethods("flax.video/video#type:DurationRange", "object", {"startFraction":_flaxMemberParameters2,"endFraction":_flaxMemberParameters2,"toString":_flaxMemberParameters0}, {}), []);
export function _DurationRangeFactory(start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>, end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>): DurationRange {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.video/video#type:DurationRange", "", [{"name":"start","required":true,"positional":true},{"name":"end","required":true,"positional":true}], [start, end], {}) as DurationRange;
}
const _DurationRangeProxy = {type: "flax.video/video#type:DurationRange", parameters: _flaxMemberParameters3, constructors: {"": _flaxMemberParameters3}, methods: {"startFraction":_flaxMemberParameters2,"endFraction":_flaxMemberParameters2,"toString":_flaxMemberParameters0}, getters: ["start","end"], setters: [], contextMembers: [], superMembers: ["get:start","get:end","startFraction","endFraction","toString"]} as const;
export interface _DurationRangeNative extends DurationRange {
readonly [_flaxDartTypeValue]: _DurationRangeNative;

startFraction(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>): number;
endFraction(duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>): number;
toString(): string;
get start(): upstream0.Duration;
get end(): upstream0.Duration;
}
export abstract class _DurationRangeNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DurationRange>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DurationRange;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:DurationRange", readonly [], false];
constructor(start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>, end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>) { super(_DurationRangeProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DurationRangeNative.prototype, _DurationRangeProxy);
export namespace _DurationRangeFactory { export function implement(args: [start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>, end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>], implementation: {}): DurationRange {
return constructProxy(_DurationRangeProxy, args, implementation) as DurationRange; } }
const _DurationRangeBinding = _flaxProxyFactory(_DurationRangeFactory, _DurationRangeNative) as unknown as typeof _DurationRangeFactory & (new(start: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>, end: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }>) => _DurationRangeNative);
export const DurationRange: typeof _DurationRangeBinding & _FlaxInstanceType<DurationRange> & _FlaxDartType<DurationRange, readonly ["class", "flax.video/video#type:DurationRange", readonly [], false]> = _flaxBindInstanceType<DurationRange, typeof _DurationRangeBinding>(_DurationRangeBinding, "flax.video/video#type:DurationRange", ["dart:core::Object"]) as typeof _DurationRangeBinding & _FlaxInstanceType<DurationRange> & _FlaxDartType<DurationRange, readonly ["class", "flax.video/video#type:DurationRange", readonly [], false]>;
