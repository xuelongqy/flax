// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"ancestor","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"existingVelocity","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ClampingScrollPhysics extends Omit<upstream0.ScrollPhysics, typeof _flaxDartTypeValue | "parent" | "minFlingDistance" | "minFlingVelocity" | "maxFlingVelocity" | "dragStartDistanceMotionThreshold" | "allowImplicitScrolling" | "allowUserScrolling" | "buildParent" | "applyTo" | "carriedMomentum" | "toString">, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ClampingScrollPhysics": readonly [] }> { readonly __ClampingScrollPhysics: unique symbol;

readonly parent: upstream0.ScrollPhysics | null;
readonly minFlingDistance: number;
readonly minFlingVelocity: number;
readonly maxFlingVelocity: number;
readonly dragStartDistanceMotionThreshold: number | null;
readonly allowImplicitScrolling: boolean;
readonly allowUserScrolling: boolean;
buildParent(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): upstream0.ScrollPhysics | null;
applyTo(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null): ClampingScrollPhysics;
carriedMomentum(existingVelocity: number): number;
toString(): string;
}
defineObject("flax.core/flutter#type:ClampingScrollPhysics", ["parent","minFlingDistance","minFlingVelocity","maxFlingVelocity","dragStartDistanceMotionThreshold","allowImplicitScrolling","allowUserScrolling"], [], _flaxBindingMethods("flax.core/flutter#type:ClampingScrollPhysics", "object", {"buildParent":_flaxMemberParameters0,"applyTo":_flaxMemberParameters0,"carriedMomentum":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), []);
export function _ClampingScrollPhysicsFactory(options: { parent?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined } = {}): ClampingScrollPhysics {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ClampingScrollPhysics", "", [{"name":"parent","required":false,"positional":false}], [], options) as ClampingScrollPhysics;
}
export const ClampingScrollPhysics: typeof _ClampingScrollPhysicsFactory & _FlaxInstanceType<ClampingScrollPhysics> & _FlaxDartType<ClampingScrollPhysics, readonly ["class", "flax.core/flutter#type:ClampingScrollPhysics", readonly [], false]> = _flaxBindInstanceType<ClampingScrollPhysics, typeof _ClampingScrollPhysicsFactory>(_ClampingScrollPhysicsFactory, "flax.core/flutter#type:ClampingScrollPhysics", ["flax.core/flutter#type:ScrollPhysics","dart:core::Object"]) as typeof _ClampingScrollPhysicsFactory & _FlaxInstanceType<ClampingScrollPhysics> & _FlaxDartType<ClampingScrollPhysics, readonly ["class", "flax.core/flutter#type:ClampingScrollPhysics", readonly [], false]>;
