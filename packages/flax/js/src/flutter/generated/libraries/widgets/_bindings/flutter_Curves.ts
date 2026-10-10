// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Cubic';
import '@flax/flutter/widgets/_bindings/flutter_Cubic';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Curves extends Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curves": readonly [] }> { readonly __Curves: unique symbol;
}
defineObject("flax.core/flutter#type:Curves", [], [], _flaxBindingMethods("flax.core/flutter#type:Curves", "object", {}), []);
const _CurvesFactory = {} as {readonly linear: upstream0.Curve;readonly ease: upstream1.Cubic;readonly easeIn: upstream1.Cubic;readonly easeOut: upstream1.Cubic;readonly easeInOut: upstream1.Cubic};
Object.defineProperty(_CurvesFactory, "linear", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.linear", []) });
Object.defineProperty(_CurvesFactory, "ease", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.ease", []) });
Object.defineProperty(_CurvesFactory, "easeIn", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeIn", []) });
Object.defineProperty(_CurvesFactory, "easeOut", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeOut", []) });
Object.defineProperty(_CurvesFactory, "easeInOut", { get: () => invokeTopLevel("flax.core/flutter#read:Curves.easeInOut", []) });
export const Curves: typeof _CurvesFactory & _FlaxInstanceType<Curves> = _flaxBindInstanceType<Curves, typeof _CurvesFactory>(_CurvesFactory, "flax.core/flutter#type:Curves", ["dart:core::Object"]);
