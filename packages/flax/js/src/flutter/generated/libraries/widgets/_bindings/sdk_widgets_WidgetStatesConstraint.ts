// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"other","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStatesConstraint extends Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }> { readonly __WidgetStatesConstraint: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStatesConstraint;

isSatisfiedBy(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): boolean;
operatorBitAnd(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>): WidgetStatesConstraint;
operatorBitOr(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>): WidgetStatesConstraint;
operatorBitNot(): WidgetStatesConstraint;
}
defineObject("flax.core/sdk_widgets#type:WidgetStatesConstraint", [], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStatesConstraint", "object", {"isSatisfiedBy":_flaxMemberParameters0,"operatorBitAnd":_flaxMemberParameters1,"operatorBitOr":_flaxMemberParameters1,"operatorBitNot":_flaxMemberParameters2}, {}), []);
export const WidgetStatesConstraint: object & _FlaxInstanceType<WidgetStatesConstraint> & _FlaxDartType<WidgetStatesConstraint, readonly ["class", "flax.core/sdk_widgets#type:WidgetStatesConstraint", readonly [], false]> = _flaxBindInstanceType<WidgetStatesConstraint, object>({}, "flax.core/sdk_widgets#type:WidgetStatesConstraint", ["dart:core::Object"]) as object & _FlaxInstanceType<WidgetStatesConstraint> & _FlaxDartType<WidgetStatesConstraint, readonly ["class", "flax.core/sdk_widgets#type:WidgetStatesConstraint", readonly [], false]>;
