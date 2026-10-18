// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
const _flaxMemberParameters0 = [{"name":"event","required":true,"positional":true},{"name":"entry","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface HitTestTarget extends Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> { readonly __HitTestTarget: unique symbol;
readonly [_flaxDartTypeValue]: HitTestTarget;

handleEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, entry: Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [HitTestTarget] }>): void;
}
defineObject("flax.core/sdk_gestures#type:HitTestTarget", [], [], _flaxBindingMethods("flax.core/sdk_gestures#type:HitTestTarget", "object", {"handleEvent":_flaxMemberParameters0}, {}), []);
const _HitTestTargetProxy = {type: "flax.core/sdk_gestures#type:HitTestTarget", parameters: [], constructors: {}, methods: {"handleEvent":_flaxMemberParameters0}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _HitTestTargetFactory { export function implement(args: [], implementation: {handleEvent: ((event: upstream0.PointerEvent, entry: upstream1.HitTestEntry<HitTestTarget>) => void)}): HitTestTarget {
return constructProxy(_HitTestTargetProxy, args, implementation) as HitTestTarget; } }
export const HitTestTarget: typeof _HitTestTargetFactory & _FlaxInstanceType<HitTestTarget> & _FlaxDartType<HitTestTarget, readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]> = _flaxBindInstanceType<HitTestTarget, typeof _HitTestTargetFactory>(_HitTestTargetFactory, "flax.core/sdk_gestures#type:HitTestTarget", ["dart:core::Object"]) as typeof _HitTestTargetFactory & _FlaxInstanceType<HitTestTarget> & _FlaxDartType<HitTestTarget, readonly ["class", "flax.core/sdk_gestures#type:HitTestTarget", readonly [], false]>;
