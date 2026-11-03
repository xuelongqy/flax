// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import { _flaxMemberParameters1, _flaxMemberParameters36 } from "@flax/audioplayers/_bindings/audio.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PositionUpdater extends Readonly<{ "__flaxBound:package:audioplayers/src/position_updater.dart::PositionUpdater": readonly [] }> { readonly __PositionUpdater: unique symbol;
readonly [_flaxDartTypeValue]: PositionUpdater;

}
defineObject("flax.audio/audio#type:PositionUpdater", ["getPosition","positionStream"], [], _flaxBindingMethods("flax.audio/audio#type:PositionUpdater", "object", {"update":_flaxMemberParameters1,"start":_flaxMemberParameters1,"stop":_flaxMemberParameters1,"stopAndUpdate":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, {}), []);
const _PositionUpdaterProxy = {type: "flax.audio/audio#type:PositionUpdater", parameters: _flaxMemberParameters36, constructors: {"": _flaxMemberParameters36}, methods: {"update":_flaxMemberParameters1,"start":_flaxMemberParameters1,"stop":_flaxMemberParameters1,"stopAndUpdate":_flaxMemberParameters1,"dispose":_flaxMemberParameters1}, getters: ["getPosition","positionStream"], setters: [], contextMembers: [], superMembers: ["get:getPosition","get:positionStream","update","stopAndUpdate","dispose"]} as const;
export interface PositionUpdater {
readonly [_flaxDartTypeValue]: PositionUpdater;

update(): Promise<void>;
stopAndUpdate(): Promise<void>;
dispose(): Promise<void>;
get getPosition(): (() => Promise<upstream0.Duration | null>);
get positionStream(): upstream1.Stream<upstream0.Duration>;
}
export abstract class PositionUpdater extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PositionUpdater>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PositionUpdater;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.audio/audio#type:PositionUpdater", readonly [], false];
constructor(options: {getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null>)}) { super(_PositionUpdaterProxy, Array.from(arguments)); }
abstract start(): void;
abstract stop(): void;
}
_flaxDefineProxyBase(PositionUpdater.prototype, _PositionUpdaterProxy);
export namespace PositionUpdater { export function implement(args: [options: {getPosition: (() => Promise<Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | null>)}], implementation: {start: (() => void); stop: (() => void)}): PositionUpdater {
return constructProxy(_PositionUpdaterProxy, args, implementation) as PositionUpdater; } }
_flaxBindInstanceType<PositionUpdater, typeof PositionUpdater>(PositionUpdater, "flax.audio/audio#type:PositionUpdater", ["dart:core::Object"]);
