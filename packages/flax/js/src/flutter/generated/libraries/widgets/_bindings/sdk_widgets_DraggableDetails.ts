// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { _flaxMemberParameters104 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DraggableDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_target.dart::DraggableDetails": readonly [] }> { readonly __DraggableDetails: unique symbol;
readonly [_flaxDartTypeValue]: DraggableDetails;

readonly wasAccepted: boolean;
readonly velocity: upstream0.Velocity;
readonly offset: upstream1.Offset;
}
defineObject("flax.core/sdk_widgets#type:DraggableDetails", ["wasAccepted","velocity","offset"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DraggableDetails", "object", {}, {}), []);
export function _DraggableDetailsFactory(options: { wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> }): DraggableDetails {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DraggableDetails", "", [{"name":"wasAccepted"},{"name":"velocity","required":true},{"name":"offset","required":true}], [], options) as DraggableDetails;
}
const _DraggableDetailsProxy = {type: "flax.core/sdk_widgets#type:DraggableDetails", parameters: _flaxMemberParameters104, constructors: {"": _flaxMemberParameters104}, methods: {}, getters: ["wasAccepted","velocity","offset"], setters: [], contextMembers: [], superMembers: ["get:wasAccepted","get:velocity","get:offset"]} as const;
export interface _DraggableDetailsNative extends DraggableDetails {
readonly [_flaxDartTypeValue]: _DraggableDetailsNative;

get wasAccepted(): boolean;
get velocity(): upstream0.Velocity;
get offset(): upstream1.Offset;
}
export abstract class _DraggableDetailsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DraggableDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false];
constructor(options: {wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_DraggableDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DraggableDetailsNative.prototype, _DraggableDetailsProxy);
export namespace _DraggableDetailsFactory { export function implement(args: [options: {wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): DraggableDetails {
return constructProxy(_DraggableDetailsProxy, args, implementation) as DraggableDetails; } }
const _DraggableDetailsBinding = _flaxProxyFactory(_DraggableDetailsFactory, _DraggableDetailsNative) as unknown as typeof _DraggableDetailsFactory & (new(options: {wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) => _DraggableDetailsNative);
export const DraggableDetails: typeof _DraggableDetailsBinding & _FlaxInstanceType<DraggableDetails> & _FlaxDartType<DraggableDetails, readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false]> = _flaxBindInstanceType<DraggableDetails, typeof _DraggableDetailsBinding>(_DraggableDetailsBinding, "flax.core/sdk_widgets#type:DraggableDetails", ["dart:core::Object"]) as typeof _DraggableDetailsBinding & _FlaxInstanceType<DraggableDetails> & _FlaxDartType<DraggableDetails, readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false]>;
