// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters0, _flaxMemberParameters154 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Feedback extends Readonly<{ "__flaxBound:package:flutter/src/widgets/feedback.dart::Feedback": readonly [] }> { readonly __Feedback: unique symbol;
readonly [_flaxDartTypeValue]: Feedback;

}
defineObject("flax.core/sdk_widgets#type:Feedback", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Feedback", "object", {}, {}), []);
export namespace _FeedbackFactory { export function forTap(context: upstream0.BuildContext): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Feedback.forTap", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export namespace _FeedbackFactory { export function wrapForTap(callback: (() => void) | null, context: upstream0.BuildContext): (() => void) | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Feedback.wrapForTap", [callback, contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters154);
return _flaxResult as (() => void) | null;
} }
export namespace _FeedbackFactory { export function forLongPress(context: upstream0.BuildContext): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Feedback.forLongPress", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as Promise<void>;
} }
export namespace _FeedbackFactory { export function wrapForLongPress(callback: (() => void) | null, context: upstream0.BuildContext): (() => void) | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Feedback.wrapForLongPress", [callback, contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters154);
return _flaxResult as (() => void) | null;
} }
export const Feedback: typeof _FeedbackFactory & _FlaxInstanceType<Feedback> & _FlaxDartType<Feedback, readonly ["class", "flax.core/sdk_widgets#type:Feedback", readonly [], false]> = _flaxBindInstanceType<Feedback, typeof _FeedbackFactory>(_FeedbackFactory, "flax.core/sdk_widgets#type:Feedback", ["dart:core::Object"]) as typeof _FeedbackFactory & _FlaxInstanceType<Feedback> & _FlaxDartType<Feedback, readonly ["class", "flax.core/sdk_widgets#type:Feedback", readonly [], false]>;
