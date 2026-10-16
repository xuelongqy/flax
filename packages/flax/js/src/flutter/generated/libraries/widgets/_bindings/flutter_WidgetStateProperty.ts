// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }> { readonly __WidgetStateProperty: unique symbol;

resolve(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): T;
}
defineObject("flax.core/flutter#type:WidgetStateProperty", [], [], _flaxBindingMethods("flax.core/flutter#type:WidgetStateProperty", "object", {"resolve":_flaxMemberParameters0}, {}), []);
namespace _WidgetStatePropertyFactory { function _flaxDefault_resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream0.WidgetState>) => (T | DartInput<T>))): WidgetStateProperty<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = constructDeferredObject("flax.core/flutter#type:WidgetStateProperty", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateProperty<T>;
return _flaxResult as WidgetStateProperty<T>;
}
export const resolveWith = _flaxDefineDartCallTypes(_flaxDefault_resolveWith, {"id":"flax.core/flutter#function:WidgetStateProperty.resolveWith","parameters":[{"name":"callback","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_resolveWith, _FlaxSignature1>;
}
export const WidgetStateProperty: typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<WidgetStateProperty<unknown | null>, typeof _WidgetStatePropertyFactory>(_WidgetStatePropertyFactory, "flax.core/flutter#type:WidgetStateProperty", ["dart:core::Object"]) as typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(WidgetStateProperty, "flax.core/flutter#type:WidgetStateProperty", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: WidgetStateProperty<_Selected0>;} & _FlaxInstanceType<WidgetStateProperty<_Selected0>> & _FlaxDartType<WidgetStateProperty<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (callback: ((states: DartSet<upstream0.WidgetState>) => (_Selected0 | DartInput<_Selected0>))) => WidgetStateProperty<_Selected0> : never : never; }
