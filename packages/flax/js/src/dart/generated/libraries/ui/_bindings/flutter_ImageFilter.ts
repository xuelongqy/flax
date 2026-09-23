// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface ImageFilter extends Readonly<{ "__flaxBound:dart:ui::ImageFilter": readonly [] }> { readonly __ImageFilter: unique symbol;
}
defineObject("flax.core/flutter#type:ImageFilter", [], [], {}, []);
export namespace ImageFilter {
export function blur(options: { sigmaX?: number | undefined; sigmaY?: number | undefined } = {}): ImageFilter {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "blur", [{"name":"sigmaX","required":false,"positional":false},{"name":"sigmaY","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace ImageFilter {
export function dilate(options: { radiusX?: number | undefined; radiusY?: number | undefined } = {}): ImageFilter {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "dilate", [{"name":"radiusX","required":false,"positional":false},{"name":"radiusY","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace ImageFilter {
export function erode(options: { radiusX?: number | undefined; radiusY?: number | undefined } = {}): ImageFilter {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "erode", [{"name":"radiusX","required":false,"positional":false},{"name":"radiusY","required":false,"positional":false}], [], options) as ImageFilter;
}
}
export namespace ImageFilter {
export function compose(options: { outer: ImageFilter; inner: ImageFilter }): ImageFilter {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ImageFilter", "compose", [{"name":"outer","required":true,"positional":false},{"name":"inner","required":true,"positional":false}], [], options) as ImageFilter;
}
}
