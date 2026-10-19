// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import '@flax/flutter/gestures/_bindings/sdk_gestures_Velocity';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"wasAccepted"},{"name":"velocity","required":true},{"name":"offset","required":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DraggableDetails extends Readonly<{ "__flaxBound:package:flutter/src/widgets/drag_target.dart::DraggableDetails": readonly [] }> { readonly __DraggableDetails: unique symbol;
readonly [_flaxDartTypeValue]: DraggableDetails;

}
defineObject("flax.core/sdk_widgets#type:DraggableDetails", ["wasAccepted","velocity","offset"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DraggableDetails", "object", {}, {}), []);
const _DraggableDetailsProxy = {type: "flax.core/sdk_widgets#type:DraggableDetails", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["wasAccepted","velocity","offset"], setters: [], contextMembers: [], superMembers: ["get:wasAccepted","get:velocity","get:offset"]} as const;
export interface DraggableDetails {
readonly [_flaxDartTypeValue]: DraggableDetails;

get wasAccepted(): boolean;
get velocity(): upstream0.Velocity;
get offset(): upstream1.Offset;
}
export abstract class DraggableDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DraggableDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DraggableDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DraggableDetails", readonly [], false];
constructor(options: {wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}) { super(_DraggableDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DraggableDetails.prototype, _DraggableDetailsProxy);
export namespace DraggableDetails { export function implement(args: [options: {wasAccepted?: boolean | undefined; velocity: Readonly<{ "__flaxBound:package:flutter/src/gestures/velocity_tracker.dart::Velocity": readonly [] }>; offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>}], implementation: {}): DraggableDetails {
return constructProxy(_DraggableDetailsProxy, args, implementation) as DraggableDetails; } }
_flaxBindInstanceType<DraggableDetails, typeof DraggableDetails>(DraggableDetails, "flax.core/sdk_widgets#type:DraggableDetails", ["dart:core::Object"]);
