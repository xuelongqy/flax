// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Cubic extends upstream0.Curve, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Cubic": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> { readonly __Cubic: unique symbol;
readonly a: number;
readonly b: number;
readonly c: number;
readonly d: number;
transform(t: number): number;
}
defineObject("flax.core/flutter#type:Cubic", ["a","b","c","d"], [], {transform(this: object, t: number): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:Cubic", "transform", [t]);
return _flaxResult as number;
},
}, []);
export function Cubic(a: number, b: number, c: number, d: number): Cubic {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Cubic", "", [{"name":"a","required":true,"positional":true},{"name":"b","required":true,"positional":true},{"name":"c","required":true,"positional":true},{"name":"d","required":true,"positional":true}], [a, b, c, d], {}) as Cubic;
}
