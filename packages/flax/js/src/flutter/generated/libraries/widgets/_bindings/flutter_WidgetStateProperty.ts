// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"states","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateProperty<T extends unknown | null = unknown | null> extends Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T] }> { readonly __WidgetStateProperty: unique symbol;

resolve(states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): T;
}
defineObject("flax.core/flutter#type:WidgetStateProperty", [], [], _flaxBindingMethods("flax.core/flutter#type:WidgetStateProperty", "object", {"resolve":_flaxMemberParameters0}, {}), []);
export namespace _WidgetStatePropertyFactory { function _flaxDefault_resolveAs<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>), states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>): _FlaxDartOutput<T> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:WidgetStateProperty.resolveAs", [value, states]);
return _flaxResult as _FlaxDartOutput<T>;
}
export const resolveAs = _flaxDefineDartCallTypes(_flaxDefault_resolveAs, {"id":"flax.core/flutter#function:WidgetStateProperty.resolveAs","parameters":[{"name":"value","required":true,"positional":true},{"name":"states","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_resolveAs, _FlaxSignature1>;
}
export namespace _WidgetStatePropertyFactory { function _flaxDefault_resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<upstream0.WidgetState>) => (T | DartInput<T>))): WidgetStateProperty<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = constructDeferredObject("flax.core/flutter#type:WidgetStateProperty", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateProperty<T>;
return _flaxResult as WidgetStateProperty<T>;
}
export const resolveWith = _flaxDefineDartCallTypes(_flaxDefault_resolveWith, {"id":"flax.core/flutter#function:WidgetStateProperty.resolveWith","parameters":[{"name":"callback","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_resolveWith, _FlaxSignature2>;
}
export namespace _WidgetStatePropertyFactory { function _flaxDefault_all<T extends unknown | null = unknown | null>(value: (T | _FlaxDartOutput<T>)): WidgetStateProperty<_FlaxDartOutput<T>> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:WidgetStateProperty.all", [value]);
return _flaxResult as WidgetStateProperty<_FlaxDartOutput<T>>;
}
export const all = _flaxDefineDartCallTypes(_flaxDefault_all, {"id":"flax.core/flutter#function:WidgetStateProperty.all","parameters":[{"name":"value","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_all, _FlaxSignature3>;
}
export namespace _WidgetStatePropertyFactory { function _flaxDefault_lerp<T extends unknown | null = unknown | null>(a: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_FlaxDartOutput<T>] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_FlaxDartOutput<T>] }> | null, t: number, lerpFunction: ((p0: _FlaxDartOutput<T> | null, p1: _FlaxDartOutput<T> | null, p2: number) => (T | _FlaxDartOutput<T>) | null)): WidgetStateProperty<_FlaxDartOutput<T> | null> | null {
if (arguments.length > 4) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:WidgetStateProperty.lerp", [a, b, t, lerpFunction]);
return _flaxResult as WidgetStateProperty<_FlaxDartOutput<T> | null> | null;
}
export const lerp = _flaxDefineDartCallTypes(_flaxDefault_lerp, {"id":"flax.core/flutter#function:WidgetStateProperty.lerp","parameters":[{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true},{"name":"lerpFunction","required":true,"positional":true}]}) as _FlaxDartCallable<typeof _flaxDefault_lerp, _FlaxSignature4>;
}
export const WidgetStateProperty: typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<WidgetStateProperty<unknown | null>, typeof _WidgetStatePropertyFactory>(_WidgetStatePropertyFactory, "flax.core/flutter#type:WidgetStateProperty", ["dart:core::Object"]) as typeof _WidgetStatePropertyFactory & _FlaxInstanceType<WidgetStateProperty<unknown | null>> & _FlaxDartType<WidgetStateProperty<unknown | null>, readonly ["class", "flax.core/flutter#type:WidgetStateProperty", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(WidgetStateProperty, "flax.core/flutter#type:WidgetStateProperty", {"category":"object","constructors":{}});
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {readonly prototype: WidgetStateProperty<_Selected0>;} & _FlaxInstanceType<WidgetStateProperty<_Selected0>> & _FlaxDartType<WidgetStateProperty<_Selected0>> : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (value: (_Selected0 | DartInput<_Selected0>),states: DartSetInput<upstream0.WidgetState, upstream0.WidgetState>) => _Selected0 : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (callback: ((states: DartSet<upstream0.WidgetState>) => (_Selected0 | DartInput<_Selected0>))) => WidgetStateProperty<_Selected0> : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (value: (_Selected0 | DartInput<_Selected0>)) => WidgetStateProperty<_Selected0> : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (a: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_Selected0] }> | null,b: Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [_Selected0] }> | null,t: number,lerpFunction: ((p0: _Selected0 | null, p1: _Selected0 | null, p2: number) => (_Selected0 | DartInput<_Selected0>) | null)) => WidgetStateProperty<_Selected0 | null> | null : never : never; }
