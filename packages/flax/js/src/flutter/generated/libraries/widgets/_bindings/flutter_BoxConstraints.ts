// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BoxConstraints extends Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> { readonly __BoxConstraints: unique symbol;
readonly minWidth: number;
readonly maxWidth: number;
readonly minHeight: number;
readonly maxHeight: number;
}
defineObject("flax.core/flutter#type:BoxConstraints", ["minWidth","maxWidth","minHeight","maxHeight"], [], {}, []);
export function BoxConstraints(options: { minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "", [{"name":"minWidth","required":false,"positional":false},{"name":"maxWidth","required":false,"positional":false},{"name":"minHeight","required":false,"positional":false},{"name":"maxHeight","required":false,"positional":false}], [], options) as BoxConstraints;
}
export namespace BoxConstraints {
export function tightFor(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightFor", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export namespace BoxConstraints {
export function expand(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "expand", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
