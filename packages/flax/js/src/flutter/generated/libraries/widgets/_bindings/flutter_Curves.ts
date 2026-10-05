// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Cubic';
import '@flax/flutter/widgets/_bindings/flutter_Cubic';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Curves extends Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curves": readonly [] }> { readonly __Curves: unique symbol;
}
defineObject("flax.core/flutter#type:Curves", [], [], _flaxBindingMethods("flax.core/flutter#type:Curves", "object", {}), []);
export const Curves = {} as {readonly linear: upstream0.Curve;readonly ease: upstream1.Cubic;readonly easeIn: upstream1.Cubic;readonly easeOut: upstream1.Cubic;readonly easeInOut: upstream1.Cubic};
Object.defineProperty(Curves, "linear", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.linear", []) });
Object.defineProperty(Curves, "ease", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.ease", []) });
Object.defineProperty(Curves, "easeIn", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeIn", []) });
Object.defineProperty(Curves, "easeOut", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeOut", []) });
Object.defineProperty(Curves, "easeInOut", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeInOut", []) });
