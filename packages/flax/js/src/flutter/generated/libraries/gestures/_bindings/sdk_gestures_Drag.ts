// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragUpdateDetails';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DragEndDetails';
import { _flaxMemberParameters21, _flaxMemberParameters7 } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Drag extends Readonly<{ "__flaxBound:package:flutter/src/gestures/drag.dart::Drag": readonly [] }> { readonly __Drag: unique symbol;
readonly [_flaxDartTypeValue]: Drag;

}
defineObject("flax.core/sdk_gestures#type:Drag", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:Drag", "object", {"update":_flaxMemberParameters21,"end":_flaxMemberParameters21,"cancel":_flaxMemberParameters7}, {}), []);
const _DragProxy = {type: "flax.core/sdk_gestures#type:Drag", parameters: _flaxMemberParameters7, constructors: {"": _flaxMemberParameters7}, methods: {"update":_flaxMemberParameters21,"end":_flaxMemberParameters21,"cancel":_flaxMemberParameters7}, getters: [], setters: [], contextMembers: [], superMembers: ["update","end","cancel"]} as const;
export interface Drag {
readonly [_flaxDartTypeValue]: Drag;

update(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
end(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/drag_details.dart::DragEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
cancel(): void;
}
export abstract class Drag extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Drag>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: Drag;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:Drag", readonly [], false];
constructor() { super(_DragProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(Drag.prototype, _DragProxy);
export namespace Drag { export function implement(args: [], implementation: {}): Drag {
return constructProxy(_DragProxy, args, implementation) as Drag; } }
_flaxBindInstanceType<Drag, typeof Drag>(Drag, "flax.core/sdk_gestures#type:Drag", ["dart:core::Object"]);
